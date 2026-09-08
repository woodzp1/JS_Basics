async function Get_Data() {
  const responce = await fetch("https://dummyjson.com/users");
  const data = await responce.json();
  Process_Data(data.users);
}
Get_Data();

const friends = document.querySelector("#friends");

function Process_Data(data) {
  let friend_list = "";
  for (const user of data) {
    const friend = `<article class="card">
            <img src="${user.image}" alt="${user.firstName}">
            <div class="info-wrapper">
                <h2>${user.firstName} ${user.lastName}</h2>
                <p>${user.age}</p>
                <p class="email">${user.email}</p>
            </div>
        </article>
        `;
    friend_list += friend;
  }
  friends.innerHTML = friend_list;
  btn.addEventListener("click", ()=>{
      const all_emails = document.querySelectorAll(".email");
      for ( element of all_emails.values()) {
          btn.textContent = element.classList.contains("hidden") ? "Show emails" : "Hide emails";
          element.classList.contains("hidden") ?  element.classList.remove("hidden") :  element.classList.add("hidden");
      }
  })
}

const btn = document.querySelector("#email-toggle");