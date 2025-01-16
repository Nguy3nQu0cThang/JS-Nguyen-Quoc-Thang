let calcSalary = document.getElementById("calcLuong");
calcSalary.onclick = function () {
  let numMoney = Number(document.getElementById("soLuong").value);
  let numDay = Number(document.getElementById("soNgay").value);
  let numSalary = numMoney * numDay;
  console.log(numMoney);
  console.log(numDay);
  document.querySelector(
    ".ket-qua1 p"
  ).innerHTML = `Tổng tiền lương là ${numSalary.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}`;
};

calcTrungBinh.onclick = function () {
  let num1 = Number(document.getElementById("giaTri1").value);
  let num2 = Number(document.getElementById("giaTri2").value);
  let num3 = Number(document.getElementById("giaTri3").value);
  let num4 = Number(document.getElementById("giaTri4").value);
  let num5 = Number(document.getElementById("giaTri5").value);
  let numTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
  document.querySelector(".ket-qua2 p").innerHTML = numTrungBinh;
};

calcConvert.onclick = function () {
  let tienUSD = Number(document.getElementById("tienUSD").value);
  let tienVND = tienUSD * 23500;
  document.querySelector(".ket-qua3 p").innerHTML = `${tienVND.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};

calcShape.onclick=function(){
    let doDai=Number(document.getElementById("chieuDai").value);
    let doRong=Number(document.getElementById("chieuRong").value);

    let dienTich=doDai*doRong
    let chuVi=(doDai+doRong)*2
    document.querySelector(".ket-qua4 p").innerHTML=`Diện tích= ${dienTich};Chu vi= ${chuVi}`
}