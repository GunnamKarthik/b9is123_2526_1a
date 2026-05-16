// create a web component to achieve a task of your choice.

//example at https://jsfiddle.net/lairdp/o475u9zL
const template = document.createElement("template");
template.innerHTML = `
<style>
  *{
    box-sizing:border-box;
  }
  .card{
    width: 550px;
    background: #1e1e2f;
    color: white;
    border-radius: 15px;
    overflow: hidden;
    font-family: Arial, sans-serif;
    margin: 20px 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;
  }
  .card:hover{
    transform: scale(1.02);
  }
  .header{
    background: linear-gradient(135deg, #7b2ff7, #f107a3);
    padding: 20px;
    text-align: center;
  }
  .header img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid white;
    object-fit: cover;
  }
.header h2{
    margin: 10px 0 5px;
  }
  .status{
    display: inline-block;
    padding: 5px 12px;
    border-radius: 20px;
    background: #00c853;
    font-size: 14px;
  }
  .content{
    padding: 20px;
  }
  .info p{
    margin: 10px 0;
    font-size: 16px;
  }
  button{
    margin-top: 15px;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #7b2ff7;
    color: white;
    font-size: 15px;
    transition: 0.3s;
  }
  button:hover{
    background: #5a00d4;
  }
  .hidden{
    display: none;
  }
</style>
<div class="card">
  <div class="header">
    <img />
    <h2></h2>
    <span class="status"></span>
  </div>
  <div class="content">
    <div class="info">
      <p><strong>Email:</strong> <slot name="email"></slot></p>
      <p><strong>Phone:</strong> <slot name="phone"></slot></p>
      <p><strong>Profession:</strong> <slot name="profession"></slot></p>
      <p><strong>Age:</strong> <slot name="age"></slot></p>
      <p><strong>Favorite Sport:</strong> <slot name="sport"></slot></p>
    </div>
    <button id="toggle-btn">Hide Details</button>
    <button id="follow-btn">Follow</button>
  </div>
</div>
`;
class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h2").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
    this.shadowRoot.querySelector(".status").innerText = this.getAttribute("status");
    this.showInfo = true;
  }
  toggleInfo() {
    this.showInfo = !this.showInfo;
    const info = this.shadowRoot.querySelector(".info");
    const btn = this.shadowRoot.querySelector("#toggle-btn");
    if (this.showInfo) {
      info.classList.remove("hidden");
      btn.innerText = "Hide Details";
    } else {
      info.classList.add("hidden");
      btn.innerText = "Show Details";
    }
  }
  followUser() {
    alert(
      "You followed " + this.getAttribute("name")
    );
  }
  connectedCallback() {
    this.shadowRoot.querySelector("#toggle-btn").addEventListener("click", () => this.toggleInfo());
    this.shadowRoot.querySelector("#follow-btn").addEventListener("click", () => this.followUser());
  }
}
customElements.define("user-card", UserCard);
