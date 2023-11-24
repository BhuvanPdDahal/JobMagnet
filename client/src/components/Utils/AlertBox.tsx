import { AlertState } from '../../interfaces/alert';

interface AlertProp {
    alert: AlertState
}

const Error = ({ alert }: AlertProp) => {
    return (
        <div className={`max-w-lg flex items-center gap-2 fixed z-20 top-3 right-100p pointer-events-none opacity-0 transition-all bg-white shadow-error rounded-md px-5 py-3 text-textcolor ${alert.show && "pointer-events-auto opacity-100 right-3"}`}>
            <i className={`text-xl fa-solid ${alert.type === "error" ? "fa-triangle-exclamation text-secondary" : "fa-circle-check text-primary"}`}></i>
            <span className='text-lg'>{alert.message}</span>
        </div>
    )
}

export default Error;