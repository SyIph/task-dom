/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (var i = 0; i < count; i++) {
        var elem = document.createElement(tag);
        elem.innerHTML = content;
        document.body.append(elem);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const max = level;
    var temp = document.createElement('div');
    const idea = function create(childrenCountt, levell, parent) {
        var elem = document.createElement('div');
        elem.setAttribute('class', 'item_' + (max - levell + 1));
        if (levell - 1 > 0)
            for (var i = 0; i < childrenCountt; i++)
                idea(childrenCountt, levell - 1, elem);
        parent.append(elem);
    };
    idea(childrenCount, level, temp);
    return temp.children[0];
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    var temp = generateTree(2, 3);
    var to_replace = temp.querySelectorAll('.item_2');
    to_replace.forEach((e) => {
        var elem = document.createElement('section');
        var content = e.innerHTML;
        elem.innerHTML = content;
        elem.setAttribute('class', 'item_2');
        e.replaceWith(elem);
    });
    return temp;
}
