
import {ReactComponent as NotFound} from '../../assets/nofound.svg';

function WithoutResults() {
    return (
        <div className="text-center" style={{ marginTop: 60 }}>
            <NotFound  width={100} style={{ marginBottom: 20 }} />
            <h3>No se encontró el signo.</h3>
        </div>
    )
}

export default WithoutResults;