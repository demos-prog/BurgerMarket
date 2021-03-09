"use strict"

// ТАБЫ - начало
var $tabs = function (target) {
  var
    _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
    _eventTabsShow,
    _showTab = function (tabsLinkTarget) {
      var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
      tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
      if (tabsLinkTarget === tabsLinkActive) {
        return;
      }
      if (tabsLinkActive !== null) {
        tabsLinkActive.classList.remove('tabs__link_active');
      }
      if (tabsPaneShow !== null) {
        tabsPaneShow.classList.remove('tabs__pane_show');
      }
      tabsLinkTarget.classList.add('tabs__link_active');
      tabsPaneTarget.classList.add('tabs__pane_show');
      document.dispatchEvent(_eventTabsShow);
    },
    _switchTabTo = function (tabsLinkIndex) {
      var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        _showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    };

  _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

  _elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target;
    if (!tabsLinkTarget.classList.contains('tabs__link')) {
      return;
    }
    e.preventDefault();
    _showTab(tabsLinkTarget);
  });

  return {
    showTab: function (target) {
      _showTab(target);
    },
    switchTabTo: function (index) {
      _switchTabTo(index);
    }
  }
};

$tabs('.tabs');
// ТАБЫ - Конец

// Изменение количества блюд - начало
let plus = document.querySelectorAll('.front__counter_plus');
let minus = document.querySelectorAll('.front__counter_minus');

for (const item of plus) {
  item.addEventListener('click', ()=>{
    let count = item.previousElementSibling;
    count.innerHTML = +count.innerHTML + 1;
  })
}

for (const item of minus) {
  let count = item.nextElementSibling;
  item.addEventListener('click', ()=>{
    if(+count.innerHTML > 0){
      count.innerHTML = +count.innerHTML - 1;
    }
  })
}
// Изменение количества блюд - конец

// Кнопка *Показать больше* - начало
let btn = document.querySelector('.showMoreBtn');

btn.addEventListener('click', ()=>{
  let elems = document.querySelectorAll('.sect1__menuLine');
  let lastElem = elems[elems.length - 1];
  lastElem.classList.remove("hiden");
})
// Кнопка *Показать больше* - конец 

// время работы - начало
let adreses = document.querySelectorAll('.item__adres');

for (const item of adreses) {
  let time = item.nextElementSibling;
  item.addEventListener('mouseover', ()=>{
    time.classList.remove('hiden');
  })
  item.addEventListener('mouseout', ()=>{
    time.classList.add('hiden');
  })
}
// время работы - конец