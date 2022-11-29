import { loading_v1 } from '../../../services/svg/svg-icon';
import './loading.scss';

const Loading = () => {
    return (
        <div
            id="loadingParent"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%'
            }}
        >
            <div className="loading">{loading_v1}</div>
        </div>
    );
};

export default Loading;
