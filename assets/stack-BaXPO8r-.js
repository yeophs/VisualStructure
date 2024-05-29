import"./layout-DyQu36RY.js";import{s as e}from"./modal-B1-yN4BK.js";class l{constructor(t){this.items=[],this.maxSize=t}push(t){this.size()<this.maxSize?(this.items.push(t),this.render()):e("Stack is full")}pop(){if(this.isEmpty())return"Stack is empty";const t=this.items.pop();return this.render(),t}top(){return this.isEmpty()?"Stack is empty":this.items[this.items.length-1]}size(){return this.items.length}isEmpty(){return this.items.length===0}elements(){return this.items}render(){const t=document.getElementById("stack");t.innerHTML="";const c=this.items.length*40;t.style.height=`${c}px`,this.items.forEach(o=>{const i=document.createElement("div");i.className="stack-element",i.textContent=o,t.appendChild(i)})}}let s;function m(){const n=document.getElementById("max-size-input"),t=parseInt(n.value);if(isNaN(t)||t<1){e("1 이상의 올바른 크기(숫자)를 입력해 주세요.");return}s=new l(t),document.getElementById("start-section").style.display="none",document.getElementById("controls").style.display="flex",document.getElementById("visualization").style.display="flex"}function r(){const n=document.getElementById("element-input"),t=n.value;if(!t){e("값을 입력해주세요!");return}s.push(t),n.value=""}function a(){const n=s.pop();e(`Popped element: ${n}`)}function p(){e(`Top element: ${s.top()}`)}function d(){e(`Stack size: ${s.size()}`)}function u(){e(`Is stack empty? ${s.isEmpty()}`)}function h(){e(`Stack elements: ${s.elements().join(", ")}`)}const y=document.querySelector(".start-btn");y.addEventListener("click",m);const E=document.querySelector(".push-btn");E.addEventListener("click",r);const k=document.querySelector(".pop-btn");k.addEventListener("click",a);const S=document.querySelector(".top-btn");S.addEventListener("click",p);const f=document.querySelector(".size-btn");f.addEventListener("click",d);const z=document.querySelector(".isEmpty-btn");z.addEventListener("click",u);const B=document.querySelector(".showElements-btn");B.addEventListener("click",h);
