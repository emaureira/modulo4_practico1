import  { useState } from 'react';

export default function AppointmentForm ({doctores}){

    const [doctorSeleccionado, setDoctorSeleccionado] = useState('');
    const [nombrePaciente, setnombrePaciente] = useState('');
    const [fechaCita, setfechaCita] = useState('');

    const handleSelectChange = (event) => {
        setDoctorSeleccionado(event.target.value);
      };
      const handleInputChange = (event) => {
        setnombrePaciente(event.target.value);
      };
      const handleCitaChange = (event) => {
        setfechaCita(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        console.log("Nombre ingresado en el input:", nombrePaciente);
        console.log(
            "Doctor seleccionado:",
            doctores.find((d) => d.id === Number(doctorSeleccionado))?.especialidad || "Ninguno"
          );
        console.log("Fecha de la Cita:",fechaCita );
       
      };

    return(
        <>
            <form className="container" onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">Nombre del Paciente</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Escribe tu nombre"
                          onChange={handleInputChange}
                        />
                           
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Especialidad del Doctor</label>
                        <select className="form-control" id="lastName" value={doctorSeleccionado} onChange={handleSelectChange}
                        >
                             {doctores.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                    {doctor.especialidad}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="username" className="form-label">Fecha Cita</label>
                        <input type="date" className="form-control" id="username" placeholder="Ingrese la Fecha de la Cita" onChange={handleCitaChange}/>
                    </div>
                    <button className="w-50 btn btn-primary btn-lg mx-auto" type="submit">Reservar Cita</button>
                </div>
            </form>
        </>
    );
}