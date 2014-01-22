window.P =
	{
	a : function(par, e, f)
		{par.addEventListener(e, f, false);}
	,
	r : function(par, e, f)
		{par.removeEventListener(e, f);}
	,
	$ : function(sel, elem)
		{
		var p;
		p = elem || document;
		return p.querySelector(sel);
		}
	,
	$$ : function(sel, elem)
		{
		var p;
		p = elem || document;
		return p.querySelectorAll(sel);
		}
	,
	matches : function(sel, elem)
		{
		elem.m = elem.webkitMatchesSelector || elem.msMatchesSelector || elem.mozMatchesSelector;
		return elem.m(sel);
		}
	,
	cE : function(elem)
		{return document.createElement(elem);}
	,
	d :
		{
		initDrag: function(e, t)
			{
			var r;
			P.d.initX = e.clientX;
			P.d.initY = e.clientY;

			P.d.elm = t.dragee || t;
			P.d.elm.X = P.d.elm.offsetLeft;
			P.d.elm.Y = P.d.elm.offsetTop;
			P.d.elm.classList.add('dragged');

			P.a(document, 'mousemove', P.d.move);
			P.a(document, 'mouseup', P.d.drop);
			}
		,
		move: function(e)
			{
			var dX = e.clientX - P.d.initX;
			var dY = e.clientY - P.d.initY;
			P.d.elm.style.left = P.d.elm.X + dX + 'px';
			P.d.elm.style.top = P.d.elm.Y + dY + 'px';
			e.preventDefault();
			}
		,
		drop: function()
			{
			P.r(document, 'mousemove', P.d.move);
			P.r(document, 'mouseup', P.d.drop);
			P.d.elm.classList.remove('dragged');
			P.d.elm = null;
			}
		}
	,
	filters :
		{
		collection : {},

		new : function(filttype, txt)
			{
			this.collection[filttype] = txt;
			var drop = true;

			for(var key in this.collection)
				{
				if(typeof this.collection[key] != 'undefined')
					{
					drop = false;
					break;
					}
				}

			drop ? cancel.classList.remove('active') : null;
			},

		empty : function(t)
			{
			this.collection = {};
			t.classList.remove('active');
			}
		}
	}

P.e =
	{
	exAs : P.cE('aside'),
	exSc : P.cE('section'),
	exD : P.cE('div'),
	exH1 : P.cE('h1'),
	exH2 : P.cE('h2'),
	exH3 : P.cE('h3'),
	exH4 : P.cE('h4'),
	exH5 : P.cE('h5'),
	exUl : P.cE('ul'),
	exOl : P.cE('ol'),
	exLi : P.cE('li'),
	exDl : P.cE('dl'),
	exDt : P.cE('dt'),
	exDd : P.cE('dd'),
	exP : P.cE('p'),
	exA : P.cE('a'),
	exSp : P.cE('span'),
	exSt : P.cE('strong'),
	exEm : P.cE('em')
	}

var genInit = function()
	{
	window.bod = document.body;

	//------------------------- Auto-add context menu (for overlays) // FF only
	var autoContext = function()
		{
		if('HTMLMenuItemElement' in window)
			{
			var m = P.cE('menu');
			m.type = 'context';
			m.id = 'overlayContext';

			var s = P.cE('menuitem');
			s.label = 'Shrink and Dock';
			s.classList.add('dock');
			m.appendChild(s);

			var c = P.cE('menuitem');
			c.label = 'Close All Overlays';
			c.classList.add('closeall');
			m.appendChild(c);

			bod.appendChild(m);
			};
		}();

	//------------------------- basic event delegation
	var eventPipe = function(e)
		{
		var y = e.type;
		var t = e.target;
		var p = t.parentNode;

		switch(true)
			{
			case y === 'mousedown':
			 	//-------- draggables
				if(P.matches('.overlay > h3', t))
					{
					P.d.initDrag(e, t);
					e.preventDefault();
					}
			break;

			case y === 'click':
				switch(true)
					{
					case P.matches('.filters li', t):	//-------------- Filters on listing pages
						filter(t, p);
					break;

					case P.matches('#cancel', t):	//-------------- Cancelling filters on listing pages
						cancelFilters(e, t);
					break;

					case P.matches('#spells h3, #spells h4, #spells h4 span', t):	//-------------- Launch spell desc into overlay
						P.matches('#spells h4 span', t) ? p = p.parentNode : null;
						showSpell(e, p);
					break;

					case P.matches('.closer', t):	//-------------- Cancelling filters on listing pages
						closeOverlay(e, t);
					break;

					case P.matches('.closeall', t):	//-------- close all overlays
						closeAllOverlays(e);
					break;

					case P.matches('.dock', t):	//-------- shrink and dock overlays
						dockOverlays(e);
					break;
					}
			break;
			}
		}

	P.a(bod, 'click', eventPipe);
	P.a(bod, 'mousedown', eventPipe);

	}; //---------------- genInit ends

P.a(window, 'DOMContentLoaded', genInit);

//-------------------------------- filtering

function filter(tg, pr)
	{
	if(P.matches('.filtered', tg))
		{P.filters.new(pr.id, '');}
	else
		{
		var sibs = P.$$('li', pr), Z, i, t;
		Z = sibs.length-1;
		for (i=Z; i>=0; i--)
			{
			t = sibs[i];
			t !== tg ? t.classList.remove('filtered') : null;
			}

		P.filters.new(pr.id, tg.textContent);
		P.$('#cancel').classList.add('active');
		}
	tg.classList.toggle('filtered');

	handleResults(hideShowItems());
	}

function hideShowItems()
	{
	var res = false, Z, i, m, t, tx;
	var f = P.filters.collection;
	var k = Object.keys(f).length;

	var listed = P.$$('#spells > li');
	Z = listed.length-1;
	for (i=Z; i>=0; i--)
		{
		t = listed[i];
		m = 0;
		tx = P.$('h4', t).textContent;

		for(key in f)
			{tx.match(f[key]) ? m++ : null ;}

		if(m === k)
			{
		 	t.classList.remove('hidden');
		 	res = true;
			}
		else
			{t.classList.add('hidden')}
		}

	return res;
	}

function cancelFilters(e, t)
	{
	P.filters.empty(t);
	hideShowItems();

	var Z, i;
	var actives = P.$$('.filtered');
	Z = actives.length-1;
	for (i=Z; i>=0; i--)
		{actives[i].classList.remove('filtered');}

	handleResults(true);
	}

function handleResults(results)
	{
	var noRes = P.$('#noRes');
	noRes ? noRes.remove() : null;

	if (!results)
		{
		var ls = P.$('#spells');
		ls.insertAdjacentHTML('beforebegin', '<p id="noRes">No results of this type found</p>');
		}
	}

//------------------------- show spell overlay
function showSpell(e, p)
	{
	var o, h, c;
	o = P.e.exAs.cloneNode(true);
	o.innerHTML = p.innerHTML;

	c = P.e.exA.cloneNode(true);
	c.classList.add('closer');
	c.overlay = o;
	o.appendChild(c);

	h = P.$('h3', o);
	h.dragee = o;
	P.a(h, 'dblclick', toggleRollup);

	o.classList.add('overlay');
	o.classList.add('spell');
	o.setAttribute('contextMenu', 'overlayContext');

	P.$('#spells').classList.add('faded');

	ovs = P.$$('.overlay').length;
	o.style.top = 17 + ovs*3 + 'rem';
	o.style.left = 'calc(50% - ' + (25 + ovs*4) + 'rem';

	window.bod.appendChild(o);
	}

//------------------------- toggle rollup on overlay
function toggleRollup()
	{this.dragee.classList.toggle('rolledup');}

//------------------------- shrink and dock overlays
function dockOverlays(e)
	{
	var ovs = P.$$('.overlay'), Z, i, t, x;
	Z = ovs.length-1;
	for(i=Z; i>=0; i--)
		{
		t = ovs[i];
		t.classList.add('rolledup');
		t.style.top = 100 + (i * 32) + 'px';
		t.style.left = 'auto';
		t.style.right = '250px';
		}
	}

//------------------------- remove overlay
function closeOverlay(e, t)
	{
	bod.removeChild(t.overlay);
	unfade();
	}

//------------------------- remove all overlays
function closeAllOverlays(e)
	{
	var ovs = P.$$('.overlay'), Z, i;
	Z = ovs.length-1;
	for(i=Z; i>=0; i--)
		{bod.removeChild(ovs[i]);}
	unfade();
	}

//------------------------- unfade listings
function unfade()
	{
	if(P.$('#spells') != null && P.$$('.overlay').length == 0)
		{P.$('#spells').classList.remove('faded');}
	}