let float_btn = document.getElementById("float-btn");

const MakeFloatEeffect = () => {
  document.addEventListener("scroll", () => {
    if (Math.floor(window.scrollY) >= 111) {
      
        float_btn.style.opacity = 1;
        float_btn.style.visibility = 'visible';
        float_btn.style.position = 'absolute';
        float_btn.style.top = '10px';
        float_btn.style.right = '10px';


      console.log(window.scrollY);
    } else {
      float_btn.classList.remove("smooth");
    }
  });
};
//MakeFloatEeffect();
