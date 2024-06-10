const AccountDropdown = ({ text, family }) => {
  return (
    <div className="mb-4">
      <div className="visible px-3 rounded-md border-2 border-blue-4 drop-shadow-sm bg-white-1 ">
        <h2 className="flex justify-between py-3">
          <div className="inline">{text}</div>
          <div className="inline-block w-8 h-8 bg-[url('/root/Mobile-Wedding-Invitations/src/assets/ribbon/ribbon04.svg')] bg-no-repeat bg-contain" />
        </h2>
        {family.map((m) => {
          return (
            <>
              <div className="w-full h-0.5 bg-blue-3"/>
              <div className="py-1 flex justify-between items-center">
                <div>
                  <div>
                    <div className="caption inline-block pr-1 font-bold">
                      {m.position}
                    </div>
                    <h4 className="inline-block">{m.name}</h4>
                  </div>
                  <div>
                    <div className="caption inline-block pr-1 font-bold">{m.bank}</div>
                    <h4 className="inline-block">{m.accountNumber}</h4>
                  </div>
                </div>
                <div className="inline-block w-8 h-8 bg-[url('/root/Mobile-Wedding-Invitations/src/assets/copy.svg')] bg-no-repeat bg-contain" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AccountDropdown;
