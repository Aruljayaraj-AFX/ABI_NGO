import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import m5 from '../assets/m5.png';
import m6 from '../assets/m6.png';
import m7 from '../assets/m7.png';
import m8 from '../assets/m8.png';

export default function Members() {
    const images = [m1, m2, m5, m6, m7, m8];
    const tripleImages = [...images, ...images, ...images];
    
    return(
      <div className='flex flex-col w-screen bg-white overflow-hidden  pb-10 sm:pb-10 md:pb-15 lg:pb-20 '>
        <div className='flex'>
          <p className='text-black text-2xl sm:text-2xl md:text-4xl lg:text-5xl  p-5 sm:p-5 md:p-10 lg:p-15' >
            D❤️nate with confidence.
          </p>
        </div>
        <div className="flex items-center mt-8 mb-5">
            <style>{`
  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-296px * 8));
    }
  }

  .scroll-animation {
    display: flex;
    animation: scrollLeft 50s linear infinite;
  }

  /* sm */
  @media (max-width: 640px) {
    .scroll-animation {
      animation-duration: 50s; /* smaller screen, faster scroll */
    }
  }

  /* md */
  @media (min-width: 641px) and (max-width: 768px) {
    .scroll-animation {
      animation-duration: 30s;
    }
  }

  /* lg */
  @media (min-width: 769px) and (max-width: 1024px) {
    .scroll-animation {
      animation-duration: 25s;
    }
  }

  /* xl */
  @media (min-width: 1025px) {
    .scroll-animation {
      animation-duration: 25s; /* larger screen, slower scroll */
    }
  }
`}</style>

            
            <div className="scroll-animation">
                {tripleImages.map((img, index) => (
                    <img 
                        key={index}
                        src={img} 
                        className="h-auto w-25 rounded-2xl sm:w-25 md:w-40 lg:w-60 flex-shrink-0 mx-2 sm:mx-2 md:mx-4 lg:mx-7"
                        style={{ 
                            transform: index % 2 === 0 ? 'translateY(-40px)' : 'translateY(40px)'
                        }}
                        alt="member"
                    />
                ))}
            </div>
        </div>
      </div>
    );
}