
// создаём плагин resizer
jQuery.fn.resizer = function() {
  // выполняем плагин для каждого объекта
  return this.each(function() {
    // определяем объект
    var me = jQuery(this);
    // вставляем в после объекта...
    me.after(
      // в нашем случае это наш "ресайзер" и производим обработку события mousedown
      jQuery('<div class="resizehandle"></div>').bind('mousedown', function(e) {
        // определяем высоту textarea
        var h = me.height();
        // определяем кординаты указателя мыши по высоте
        var y = e.clientY;
        // фнкция преобразовывает размеры textarea
        var moveHandler = function(e) { me.height(Math.max(20, e.clientY + h - y)); };
        // функци прекращает обработку событий
        var upHandler = function(e) { jQuery('html').unbind('mousemove',moveHandler).unbind('mouseup',upHandler); };
        // своего рода, инициализация, выше приведённых, функций
        jQuery('html').bind('mousemove', moveHandler).bind('mouseup', upHandler);
      })
    );
  });
}
//