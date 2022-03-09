import axios from "axios";

export const getAppointments = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/app/${id}`, {
      params: { id: id },
    });
    const appointmentsDate = [];
    for (const appointment of response.data) {
      appointmentsDate.push(appointment.date);
    }
    return appointmentsDate;
  } catch (error) {
    console.error(error);
  }
};
