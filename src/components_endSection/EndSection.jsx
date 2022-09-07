import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaCalendarAlt, FaPhone, FaQuestionCircle, FaUserFriends, FaHandshake, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './endSection.css'
function EndSection() {
    return (
        <div className='end-section'>
            <table>
                <tr>
                    <th>עוד עלינו</th>
                    <th>צרו קשר</th>
                    <th>תמכו בנו</th>
                    <th></th>
                </tr>
                <tr>
                    <td>שאלות ותשובות <FaQuestionCircle className='faq' /></td>
                    <td>054-1234567 <FaPhone className='phone' /></td>
                    <td>זמני התנדבות <FaCalendarAlt className='calendar' /></td>
                </tr>
                <tr>
                    <td>הצטרפו אלינו <FaUserFriends className='join' /></td>
                    <td>kayak@gmail.com <MdEmail className='mail' /></td>
                    <td>תרמו לנו <FaHeart className='donate' /></td>
                </tr>
                <tr>
                    <td>שתפו פעולה <FaHandshake className='Cooperation' /></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='social-media-icons'>
                    </td>
                </tr>
            </table>
            <span className='social-media-icons'>
                <FaFacebook className='facebook' />
                <FaInstagram className='instagram' />
                <FaYoutube className='youtube' />
            </span>
        </div>
    );
}
export default EndSection;

