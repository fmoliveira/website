/* Month names used for formatting date. */
var m_names = new Array("January", "February", "March",
	"April", "May", "June", "July", "August", "September",
	"October", "November", "December");

/* Date formate used in blog posts. */
function formatDate(date) {
	return moment.utc(date, "YYYY-MM-DD hh:mm:ss").format("dddd, MMMM Do YYYY");
}

$().ready(function () {

	$.getJSON("backend/tumblr.php",
	function (data) {
		var obj = $('div#conteudo');

		/* If request was successful... */
		if (data.meta.status == 200) {
			posts = data.response.posts;

			/* If there are posts to display, do that! */
			if (posts.length !== 0) {
				render_html = '';

				/* TODO: improve with template files. :) */
				$.each(posts, function (i, p) {
					render_html += '<article><h1>' + p.title + '</h1><p><date>' + formatDate(p.date) + '</date></p>' + p.body + '</article>';
				});

				obj.html(render_html);
			} else {
				/* If no posts then display an empty message. */
				obj.html('<article><h1>Blog</h1><p>Oops! Acho que ainda não tem nada escrito aqui. Desculpe-me.</p><p>Por favor volte novamente mais tarde.</p><p>Thanks.</p></article>');
			}
		} else {
			/* Otherwise display error message. */
			obj.html('<article><h1>Desculpe!</h1><p>Não foi possível consultar os posts no Tumblr.</p><p>Por favor <a href="http://' + account_name + '.tumblr.com/" target="_blank">clique aqui</a> para ir diretamente ao blog.<p>Você pode navegar pelo restante do site normalmente.</p></article>');
		}
	});

});
