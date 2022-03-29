export function Tes(props) {
  console.log(props);
    return(
      <div>
        <p>Nama : {props.nama}</p>
        <p>Sekolah : {props.sekolah}</p>
        <p>Jurusan : {props.jurusan}</p>
      </div>
    )
  }
 
export function Tes2({mapel, nilai, color = "red", lulus = false}) {
  return(
    <div style={{color:color}}>
      <p>Nama Mapel : {mapel}</p>
      <p>Nilai : {nilai}</p>
      <h3>{lulus ? "Selamat anda lulus" : "maaf belum lulus"}</h3>
    </div>
  )
}