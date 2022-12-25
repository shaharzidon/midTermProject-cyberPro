import React, { useCallback } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaCalendarAlt, FaPhone, FaQuestionCircle, FaUserFriends, FaHandshake, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import './endSection.css'
function EndSection() {
    const navigate = useNavigate();
    const handleOnClickOurStory = useCallback(() => navigate('/OurStory', { replace: true }), [navigate]);
    const handleOnClickFaq = useCallback(() => navigate('/Faq', { replace: true }), [navigate]);
    const handleOnClickBook1 = useCallback(() => navigate('/Bookstep1', { replace: true }), [navigate]);
    const handleOnClickContribute = useCallback(() => navigate('/contribute', { replace: true }), [navigate]);

    return (
        <div className='end-section'>
            <table>
                <tr>
                    <th >עוד עלינו</th>
                    <th>צרו קשר</th>
                    <th>תמכו בנו</th>
                    <th></th>
                </tr>
                <tr>
                    <td onClick={handleOnClickOurStory}>שאלות ותשובות <FaQuestionCircle className='faq-btn' /></td>
                    <td>054-1234567 <FaPhone className='phone-btn' /></td>
                    <td onClick={handleOnClickFaq} >עלינו<FaCalendarAlt className='calendar-btn' /></td>
                </tr>
                <tr>
                    <td onClick={handleOnClickBook1}>הצטרפו אלינו <FaUserFriends className='join-btn' /></td>
                    <td>Hakayak@gmail.com <MdEmail className='mail-btn' /></td>
                    <td onClick={handleOnClickContribute}>תרמו לנו <FaHeart className='donate-btn' /></td>
                </tr>
                <tr>
                    <td>שתפו פעולה <FaHandshake className='Cooperation-btn' /></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
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

