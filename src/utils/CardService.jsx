import style from "../styles/services.module.scss"

// eslint-disable-next-line react/prop-types
const CardService = ({ image, title, subtitle, contact }) => {
    return (
        <div className={`w-64 h-72 flex flex-col justify-center items-center m-3 p-4 rounded-xl ${style.shadowCard}`}>
            <img src={image} alt={title} title={title} className="w-20 mb-4 h-20" />
            <h3 className="text-xl text-brand-lightBlue font-medium text-center mb-3">{title}</h3>
            <h4 className="text-sm text-gray-500 font-light text-center mb-4">{subtitle}</h4>
            <a href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+los+servicios+que+ofrecen%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="text-brand-lightBlue font-light"
                title="Contact WhatsApp">
                &laquo; {contact} &raquo;
            </a>
        </div>
    )
}

export default CardService