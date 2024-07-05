import Layout from "@/components/layout";
import * as React from "react";

interface IAppointmentProps {}

const Appointment: React.FunctionComponent<IAppointmentProps> = (props) => {
  // return <div>Appointment</div>;
  return (
    <Layout>
      <div className="bg-red-300">Appointment</div>
    </Layout>
  )
};

export default Appointment;