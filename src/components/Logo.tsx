export default function Logo({ className = "w-12 h-12 flex-shrink-0" }: { className?: string }) {
  return (
    <div className={`${className} relative overflow-hidden flex-shrink-0`}>
      <img 
        src="https://static.wixstatic.com/media/d6757d_6da3d8d2672642988de2c6e12799fefa~mv2.png/v1/fill/w_358,h_468,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d6757d_6da3d8d2672642988de2c6e12799fefa~mv2.png"
        alt="Premier Plus Logo"
        className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[165%] h-auto max-w-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

