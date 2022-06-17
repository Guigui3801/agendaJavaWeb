/**
 * Confirmador de exclusao de um contato
 * @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("Confimar a exclusão desse contato?")
	if (resposta === true){
		window.location.href = "delete?idcon=" + idcon
	}
}