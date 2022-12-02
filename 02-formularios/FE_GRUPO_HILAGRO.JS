function Imprimir_KuDE(P_TOKEN,P_URL_GET) {


  var lSpinner$ = apex.util.showSpinner($("#data"));

  var token = P_TOKEN;
  var urlGet = P_URL_GET;

  if (!token.isEmpty() && !urlGet.isEmpty()) {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token.getValue());

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(urlGet.getValue(), requestOptions)
      .then((r) => r.blob())
      .then((pdf) => {
        apex.navigation.openInNewWindow(URL.createObjectURL(pdf), "KUDE");
      });
  } else {
    apex.message.alert("Es necesario completar URL y TOKEN");
  }

  lSpinner$.remove();
}
