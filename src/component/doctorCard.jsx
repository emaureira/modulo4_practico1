export default function DoctorCard({ doctor, experiencia, descripcion, especialidad }){
    return (
    <article className="hijogrip">
        <h4>{doctor}</h4>
        <div>{experiencia}</div>
        <p>{descripcion}</p>
        <p className="text-muted">{especialidad}</p>
      </article>
    );
}