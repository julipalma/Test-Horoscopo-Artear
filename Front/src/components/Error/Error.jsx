
import {ReactComponent as ErrorImage} from '../../assets/error.svg';
function Error(props) {
    return (
        <div className="text-center" style={{ marginTop: 60 }}>
            <ErrorImage  width={100} style={{ marginBottom: 20 }} />
            <h3>{props.message}</h3>
        </div>
    )
}

export default Error;