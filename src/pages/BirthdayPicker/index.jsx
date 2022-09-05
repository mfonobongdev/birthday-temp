import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { useForm, Controller } from "react-hook-form";
import AuthLayout from "../../components/layout/layout";
import FormHead from "../../components/formHead";

// calendars
import "react-multi-date-picker/styles/colors/purple.css";
import Gregorian from "react-date-object/calendars/gregorian";
import greg_en from "react-date-object/locales/gregorian_en";
import Persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Jalali from "react-date-object/calendars/jalali";
import Indian from "react-date-object/calendars/indian";
import indian_hi from "react-date-object/locales/indian_hi";
import Arabic from "react-date-object/calendars/arabic";
import arabic_ar from "react-date-object/locales/arabic_ar";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import "./style.scss";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { Link } from "react-router-dom";

const setMinDate = () => {
  let now = new Date();
  let day = ("0" + now.getDate()).slice(-2);
  let month = ("0" + (now.getMonth() + 1)).slice(-2);
  let today = now.getFullYear() - 1 + "/" + month + "/" + day;
  return today;
};

export default function BirthdayPicker() {
  const { control, handleSubmit } = useForm({
    defaultValues: { date: setMinDate() },
  });
  const [submittedDate, setSubmittedDate] = useState();
  const [isLoading, setisLoading] = useState(false);
  console.log(submittedDate);

  const onSubmit = ({ date }) => {
    setSubmittedDate(date?.format?.("MMMM D YYYY"));
    setisLoading(false);
  };

  const [activeCalendarIndex, setactiveCalendarIndex] = useState(0);
  const calendars = [
    {
      name: "Gregorian Calendar",
      value: { calendar: Gregorian, locale: greg_en },
    },
    {
      name: "Persian Calendar",
      value: { calendar: Persian, locale: persian_fa },
    },
    {
      name: "Jalali Calendar",
      value: { calendar: Jalali, locale: persian_fa },
    },
    {
      name: "Arabic Calendar",
      value: { calendar: Arabic, locale: arabic_ar },
    },
    {
      name: "Indian Calendar",
      value: { calendar: Indian, locale: indian_hi },
    },
  ];

  return (
    <>
      <AuthLayout pageTitle={"Birthday Mates"}>
        <div className="formContainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="date-wrap">
              <FormHead title={"When is your birthday?"} />
              <Controller
                control={control}
                name="date"
                rules={{ required: true }} //optional
                render={({
                  field: { onChange, name, value },
                  formState: { errors }, //optional, but necessary if you want to show an error message
                }) => (
                  <>
                    <DatePicker
                      className="purple"
                      value={value || setMinDate()}
                      {...calendars[activeCalendarIndex].value}
                      render={<InputIcon />}
                      maxDate={setMinDate()}
                      onChange={(date) => {
                        console.log(date);
                        onChange(date?.isValid ? date : "");
                      }}
                    />
                    {errors &&
                      errors[name] &&
                      errors[name].type === "required" && (
                        <span className="input-err-msg">Invalid Date</span>
                      )}
                  </>
                )}
              />
              <label className="calendar-select">
                <span>CALENDAR: </span>
                <select
                  value={activeCalendarIndex}
                  onChange={(e) => {
                    setactiveCalendarIndex(e.target.value);
                  }}
                >
                  {calendars.map((option, i) => (
                    <option key={option.name + i} value={i}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="date-wrap">
              <SubmitBtn
                disabled={false}
                isLoading={isLoading}
                btnText="CONTINUE"
              />
              <div className="push">
                <Link to="/login">Have an account already??</Link>
              </div>
            </div>
          </form>
        </div>
      </AuthLayout>
    </>
  );
}
