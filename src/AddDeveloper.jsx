import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Developer from './Developer';

// export class AddDeveloper extends Component {

// constructor(props) {
//     super(props)

//     this.state = {
//         firstName: '',
//         lastName: '',
//         favoriteLanguage: '',
//         yearStarted: null
//     }
// }

function AddDeveloper() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [favoriteLanguage, setFavoriteLanguage] = useState('');
    const [yearStarted, setYearStarted] = useState('');
    const navigate = useNavigate();

    // handleChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value
    //     })
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newDev = new Developer(null,
            firstName,
            lastName,
            favoriteLanguage,
            yearStarted
        );
        fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDev)
        })
            .then(() => {
                navigate('/developers');
            });
    }

    const clearForm = () => {
        document.getElementById("devForm").reset();
        setFirstName('');
        setLastName('');
        setFavoriteLanguage('');
        setYearStarted('');
    }

    return (
        <div className="container">
            <h1> ADD Developer Bio</h1>
            <div className="row">
                <div className="col-mid-6">
                    <form id="devForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" data-testid="firstName" name="firstName" className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" data-testid="lastName" name="lastName" className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="favoriteLanguage">Favorite Language</label>
                            <input type="text" data-testid="favoriteLanguage" name="favoriteLanguage" className="form-control" onChange={(e) => setFavoriteLanguage(e.target.value)} value={favoriteLanguage} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="yearStarted">Year Started</label>
                            <input type="text" data-testid="yearStarted" name="yearStarted" className="form-control" onChange={(e) => setYearStarted(e.target.value)} value={yearStarted} required />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddDeveloper;