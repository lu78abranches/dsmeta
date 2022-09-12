import axios from 'axios';
import imageIcon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../ultils/request';

import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("SUCESSO");
    });
}

function NotificationButton({saleId} : Props) {
    return (
   
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={imageIcon} alt="Notificar" />
            </div>
            )
  }

            export default NotificationButton;
