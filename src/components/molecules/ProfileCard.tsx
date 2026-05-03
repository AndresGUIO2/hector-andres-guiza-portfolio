interface ProfileCardProps {
  size: "desktop" | "mobile";
}

export default function ProfileCard({ size }: ProfileCardProps) {
  const isDesktop = size === "desktop";
  const photoSize = isDesktop ? "w-[150px] h-[150px]" : "w-[120px] h-[120px]";
  const nameClass = isDesktop ? "text-[18px] mt-8" : "text-[16px] mt-4";
  const titleClass = isDesktop ? "text-[15px]" : "text-[14px]";
  const paddingX = isDesktop ? "px-10" : "px-8";
  const paddingTop = isDesktop ? "pt-[50px]" : "pt-[30px]";

  return (
    <div className={`flex flex-col items-center ${paddingTop} ${paddingX}`}>
      <div className={`${photoSize} rounded-full overflow-hidden`}>
        <img src="/images/profile.png" alt="Héctor Güiza" className="w-full h-full object-cover" />
      </div>
      <h2 className={`${nameClass} text-dark font-medium capitalize`}>
        Héctor Andrés Güiza
      </h2>
      <p className={`${titleClass} text-secondary capitalize mt-1`}>
        Full Stack Developer
      </p>
    </div>
  );
}
