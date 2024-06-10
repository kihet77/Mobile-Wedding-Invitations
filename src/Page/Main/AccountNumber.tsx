import Layout from "../../Layout/Layout";
import BlueCircle from "../../assets/BlueCircle";
import AccountDropdown from "../../component/AccountDropdown";


interface DropDownText {
  position: string;
  name: string;
  bank: string;
  accountNumber: string;
}

const AccountNumber = () => {
  const boyfamily: DropDownText[] = [
    {
      position: "신랑",
      name: "김철수",
      bank: "카카오뱅크",
      accountNumber: "3333-12-4444-5455",
    },
    {
      position: "아버지",
      name: "김재만",
      bank: "신한",
      accountNumber: "3333-12-4444-5455",
    },
    {
      position: "어머니",
      name: "이미숙",
      bank: "국민",
      accountNumber: "3333-12-4444-5455",
    },
  ];
  const girlfamily: DropDownText[] = [
    {
      position: "신부",
      name: "박영희",
      bank: "카카오뱅크",
      accountNumber: "3333-12-4444-5455",
    },
    {
      position: "아버지",
      name: "박승태",
      bank: "신한",
      accountNumber: "3333-12-4444-5455",
    },
    {
      position: "어머니",
      name: "정선화",
      bank: "국민",
      accountNumber: "3333-12-4444-5455",
    },
  ];
  return (
    <Layout>
      <h2 className="font-bold mb-6">마음 전하실 곳</h2>
      {}
      <AccountDropdown text="신랑측"  family={boyfamily} />
      <AccountDropdown text="신부측" family={girlfamily} />

      <BlueCircle />
    </Layout>
  );
};

export default AccountNumber;
