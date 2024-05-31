import Layout from "../../Layout/Layout";
import CalendarMonth from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  const value = "2024-05-11";

  const tileClassName = ({ date }) => {
    if (date.getDay() === 0 /* 일요일 */) {
      return "sunday"; // 일요일에 해당하는 클래스
    }
    if (date.getDay() === 6 /* 토요일 */) {
      return "saturday"; // 토요일에 해당하는 클래스
    }
    return "";
  };

  return (
    <Layout>
      <div className="h-8 mt-9 mb-4 bg-[url('/root/Mobile-Wedding-Invitations/src/assets/ribbon/ribbon02.svg')] bg-no-repeat bg-contain" />
      <h2 className="font-bold">2024.05.11</h2>
      <h3 className="mt-2 leading-5">
        토요일 오후 5시 30분 <br />더 재물 옛 논현 6층 라포레홀
      </h3>

      <CalendarMonth
        tileClassName={tileClassName}
        value={value}
        className={"csscalendar"}
        calendarType="gregory"
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
      />

      <h3 className="flex items-center justify-center">
        <strong>철수</strong>
        <span className="inline-block w-4 h-4 bg-[url('/root/Mobile-Wedding-Invitations/src/assets/ribbon/ribbon03.svg')] bg-no-repeat bg-auto" />
        <strong>영희</strong> &nbsp; 결혼식이 &nbsp;{" "}
        <strong className="bg-blue-4 px"> 138일 </strong> &nbsp; 남았습니다.
      </h3>
      <div className="h-8 mt-9 mb-4 bg-[url('/root/Mobile-Wedding-Invitations/src/assets/ribbon/ribbon02.svg')] bg-no-repeat bg-contain" />
    </Layout>
  );
};

export default Calendar;
