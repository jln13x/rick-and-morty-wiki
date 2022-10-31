export const GalaxyBackground = () => {
  return (
    <>
      <div className="absolute inset-0 z-[7] bg-gradient-to-br from-violet-900 via-sky-900  to-indigo-900"></div>
      <div className="absolute inset-0 z-[8] bg-gradient-to-bl from-indigo-600 via-violet-600 to-sky-600 opacity-40"></div>
      <div className="absolute inset-0 z-10 bg-black/50"></div>
    </>
  );
};
