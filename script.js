"use strict"; // Executar o código em um "modo estrito", é uma prática comum em desenvolvimento moderno de JavaScript, pois ajuda a identificar e evitar certos tipos de erros e a seguir boas práticas de programação.

// Array de objetos que contém informações sobre as imagens
const images = [
	{
		id: "1",
		url: "https://picsum.photos/id/232/1900",
	},
	{
		id: "2",
		url: "https://picsum.photos/id/233/1900",
	},
	{
		id: "3",
		url: "https://picsum.photos/id/234/1900",
	},
	{
		id: "4",
		url: "https://picsum.photos/id/235/1900",
	},
	{
		id: "5",
		url: "https://picsum.photos/id/236/1900",
	},
	{
		id: "6",
		url: "https://picsum.photos/id/237/1900",
	},
];

// Seleciona o container onde as imagens serão carregadas
const containerItems = document.querySelector("#container-items");

// Função para carregar as imagens no container
const loadImages = (images, container) => {
	// Itera sobre o array de imagens
	images.forEach((image) => {
		// Adiciona o código HTML de cada imagem ao container
		container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `;
	});
};

// Chama a função para carregar as imagens no container
loadImages(images, containerItems);

// Seleciona todos os itens de imagem após o carregamento
let items = document.querySelectorAll(".item");

// Função para mover para o slide anterior
const previous = () => {
	// Move o primeiro item para o final do container
	containerItems.appendChild(items[0]);
	// Atualiza a lista de itens
	items = document.querySelectorAll(".item");
};

// Função para mover para o próximo slide
const next = () => {
	// Seleciona o último item
	const lastItem = items[items.length - 1];
	// Insere o último item antes do primeiro item no container
	containerItems.insertBefore(lastItem, items[0]);
	// Atualiza a lista de itens
	items = document.querySelectorAll(".item");
};

// Adiciona um ouvinte de evento de clique ao botão "Anterior"
document.querySelector("#previous").addEventListener("click", previous);

// Adiciona um ouvinte de evento de clique ao botão "Próximo"
document.querySelector("#next").addEventListener("click", next);
