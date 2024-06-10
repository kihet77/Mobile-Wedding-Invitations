import Layout from "../../Layout/Layout";
import BlueCircle from "../../assets/BlueCircle";
import AccountDropdown from "../../component/AccountDropdown.tsx";

interface DropDownText {
  position: string;
  name: string;
  bank: string;
  accountNumber: string;
}
interface DropDown {
  text: string;
  family: DropDownText[];
}

const AccountNumber = () => {
  const boyfamily: DropDown = {
    text: "신랑측",
    family: [
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
    ],
  };
  const girlfamily: DropDown = {
    text: "신부측",
    family: [
      {
        position: "신부",
        name: "양영희",
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
    ],
  };
  return (
    <Layout>
      <h2 className="font-bold mb-6">마음 전하실 곳</h2>
      <AccountDropdown  text={boyfamily.text} family={boyfamily.family} />
      <AccountDropdown text={girlfamily.text} family={girlfamily.family} />
      <BlueCircle />
    </Layout>
  );
};

export default AccountNumber;
