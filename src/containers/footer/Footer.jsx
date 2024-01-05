import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='chess__footer section__padding' id="footer">
      <div className='chess__footer-heading'>
        <h1 className='gradient__text'>Hunter Chess Club</h1>
        <p>Hunter College</p>
        <p>695 Park Ave NY,</p>
        <p> NY 10065</p>
      </div>

      <div className='chess__footer-links'>
        <h3>Join the community today!</h3>
        <a href="https://www.instagram.com/chessclubhunter/"><p>Instagram</p></a>
        <a href="https://discord.gg/9UECjKwR9n"><p>Discord</p></a>
        <a href="https://www.chess.com/club/hunter-chess-club"><p>Chess.com</p></a>
        <h3>Email us at chessathunter@gmail.com</h3>
      </div>
    </div>
  )
}

export default Footer
