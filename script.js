function submitForm(e){
  e.preventDefault();
  const form=e.target, status=document.getElementById("form-status");
  const data=new FormData(form);
  const subject=encodeURIComponent("RewardsZapp Website Enquiry - "+(data.get("company")||data.get("name")));
  const body=encodeURIComponent(
    "Name: "+data.get("name")+"\n"+
    "Email: "+data.get("email")+"\n"+
    "Company: "+data.get("company")+"\n"+
    "Requirement: "+data.get("requirement")+"\n\n"+
    data.get("message")
  );
  window.location.href="mailto:info@rewardszapp.com?subject="+subject+"&body="+body;
  status.textContent="Opening your email app to send the enquiry…";
}
