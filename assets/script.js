//Created by Rodrigo Cordeiro

//Função que exibe os tooltips
//dizemos que quando a página estiver pronta
$(document).ready(function(){
//Ao passar o mouse sobre o span com a classe "abrir"		
	$(".abrir").hover(function() {
			//O span com a classe "abrir" recebera a classe "open", resultando em "abrir.open", e especificamos no CSS que o que estivesse dentro de algo com a classe ".abrir.open" seria diferente de ".abrir .popup"
			$(this).toggleClass("open");
	});
	})

//Função loading, para as páginas que possuem um carregamento antes da página. Ainda em implantação
function load(){
	$('.load').css('display','none');
	typing();
}

//Menu - Quando a página é exibida em versão mobile, o menu fica 'escondido', sendo exibido apenas as barras que quando clicadas exibem o menu. A função que faz com que o menu seja exibido ou escondido é esta:
$(document).ready(function(){
			        $("#open-menu").click(function(){
			            $("#minnav-menu").toggleClass("open");
			        });
			    });

$(document).ready(function(){
			        $("#minnav-menu").click(function close(){
			            $("#minnav-menu").toggleClass("open");
			        });
			    });

//https://blog-da-conspiracao--conceptiveco.repl.co/pages/js/print/index.html
function imprimir(){
			window.print();
		}


