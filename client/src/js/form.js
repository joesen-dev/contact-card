const form = document.getElementById("formToggle");
console.log(form);

export const toggleForm = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
};

// Create an exported clear form function called clearForm() that targets the name, phone, and email IDs and sets their value to an empty string.
export const clearForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};
