function CardContainer({children} : {children : React.ReactNode}) {
  return(
    <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
      {children}
    </div>
  );
};
export default CardContainer;