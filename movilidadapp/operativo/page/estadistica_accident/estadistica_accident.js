frappe.pages['estadistica-accident'].on_page_load = function(wrapper) {
	new MyPage(wrapper);
}

//PAGE CONTENT
MyPage = Class.extend({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Estadistica',
			single_column: true
		});
		//MAKE PAGE
		this.make();
	},

	//MakePage
	make:function(){
		//grab Class
		let me = $(this);

		//body content
		// let body = `<h1> Hola Mundo</h1>`;

		//push dom element
		$(frappe.render_template(frappe.estadistica_app_page.body, this)).appendTo(this.page.main)
	}
	//END OF CLASS
});


	// HTML CONTENT
	let body = `
	
	<div class="ce-block__content"><div number_card_name="Total Levantamientos"><div class="widget number-widget-box" data-widget-name="e7a0a38ef5">
			<div class="widget-head">
				<div class="widget-label">
					<div class="widget-title"><span class="ellipsis" title="Total Levantamientos">Total Levantamientos</span></div>
					<div class="widget-subtitle"></div>
				</div>
				<div class="widget-control"><div class="card-actions dropdown pull-right">
				
			</div></div>
			</div>
			<div class="widget-body"><div class="widget-content">
				<div class="number" style="color:undefined">2</div>
				<div class="card-stats grey-stat">
				<span class="percentage-stat-area">
					
					<span class="percentage-stat">
						0  %
					</span>
				</span>
				<span class="stat-period text-muted">
					since yesterday
				</span>
			</div></div></div>
			<div class="widget-footer"></div>
		</div></div></div>
	
	`;
	// frappe.estadistica_app_page = {}
	frappe.estadistica_app_page = {
		body: body
	}
