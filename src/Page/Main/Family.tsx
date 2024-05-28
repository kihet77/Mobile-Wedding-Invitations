import Layout from "../../Layout/Layout";
import BlueCircle from "../../assets/BlueCircle";

const Family = () => {
  return (
    <Layout>
      <BlueCircle />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ol>
            <li className="flex justify-center items-center">
              <h4 className="w-9 text-center mr-3">신랑</h4>
              <h3 className="w-10 text-center font-bold">김철수</h3>
            </li>
            <li className="flex justify-center items-center">
              <h4 className="w-9 text-center mr-3">아버지</h4>
              <h3 className="w-10 text-center font-bold">김재만</h3>
            </li>            
            <li className="flex justify-center items-center">
              <h4 className="w-9 text-center mr-3">어머니</h4>
              <h3 className="w-10 text-center font-bold">이미숙</h3>
            </li>
          </ol>
        </div>
        <div>
        <ol>
            <li className="flex justify-center items-center">
              <h4 className="w-9 text-center mr-3">신부</h4>
              <h3 className="w-10 text-center font-bold">김철수</h3>
            </li>
            <li className="flex justify-center items-center">
              <h4 className="w-9 text-center mr-3">아버지</h4>
              <h3 className="w-10 text-center font-bold">김재만</h3>
            </li>            
            <li className="flex justify-center items-center">
              <h4 className="w-9 text-center mr-3">어머니</h4>
              <h3 className="w-10 text-center font-bold">이미숙</h3>
            </li>
          </ol>
        </div>
      </div>
        <div className="caption mt-2">이름을 누르시면 연락처가 복사됩니다.</div>
    </Layout>
  );
};

export default Family;
