import DeveloperBio from './DeveloperBio'

export default function DisplayBios(props) {
    return (
        props.developers.map(
            dev => <DeveloperBio developer={dev} key={dev.id} />
        )
    )
}

// export class DisplayBios extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             developers:[
//                 new Developer(1, "Prerak", "Patel", "Java", 2016),
//                 new Developer(1, "Prerak", "Patel", "Python", 2018),
//                 new Developer(1, "Prerak", "Patel", "Ocaml", 2016),
//                 new Developer(1, "Prerak", "Patel", "Haskell", 2016),
//                 new Developer(1, "Prerak", "Patel", "C++", 2016),
//             ]
//         }
//     }

//     render() {
//         return (
//             this.state.developers.map(
//                 dev => <DeveloperBio developer={dev} key={dev.id}/>
//             )
//         )
//     }
// }

// export default DisplayBios;