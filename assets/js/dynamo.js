function dynamomenu() {
  dynamotoolbarmodule = 
    (function () {
    /**
     * @function loadtoolbar
     * @description The application toolbar.
     */
    function loadtoolbar() {
      let bar = document.getElementById("dynamotoolbar")
      let buttonlist = document.createElement('ul')
      buttonlist.id = 'dynamo_menu_buttons'
      buttonlist.classList.add('dynamo-menu')
      buttonlist.appendChild(addbuttondropdown('fileload', 'fileloadBTN', 'left', ['Default']))
      buttonlist.appendChild(addbutton('line1', 'dividerBTN', 'left', true))
      buttonlist.appendChild(addbutton('list', 'listBTN', 'left', false))
      buttonlist.appendChild(addbutton('hashtag', 'hashtagBTN', 'left', false))
      buttonlist.appendChild(addbutton('shapesstack', 'shapesstackBTN', 'left', false))
      buttonlist.appendChild(addbutton('shapes', 'shapesBTN', 'left', false))
      buttonlist.appendChild(addbutton('run', 'dogrunBTN', 'left', false))
      buttonlist.appendChild(addbutton('print', 'printerBTN', 'left', false))
      buttonlist.appendChild(addbutton('plot', 'plotBTN', 'left', false))
      buttonlist.appendChild(addbutton('csvdata', 'filesaveBTN', 'left', false))
      buttonlist.appendChild(addbutton('homepage', 'targetBTN', 'right', false))
      buttonlist.appendChild(addbutton('line5', 'dividerBTN', 'right', true))
      buttonlist.appendChild(addbutton('book', 'bookBTN', 'right', false))
      //buttonlist.appendChild(addbutton('funstuff', 'horuseyeBTN', 'right', false))

      bar.appendChild(buttonlist)
      let toolbarfunctions = {
        'fileloadBTN': fileload, 'listBTN': list, 'hashtagBTN': hashtag, 'shapesstackBTN': shapestack, 'shapesBTN': shapes, 'dogrunBTN': run, 'printerBTN': print, 'plotBTN': plot, 'filesaveBTN': save, 'pageoutBTN': manpagedown, 'pageinBTN': manpageup, 'horuseyeBTN': funstuff, 'bookBTN': book, 'rightBTN': right, 'leftBTN': left, 'targetBTN': homepage
      }
      loadtooltips()
      buttonlist.onclick = (e) => {
        e.preventDefault()
        clickfilter(e)
        toolbarfunctions[e.target.innerHTML]()
      }
    }
    /**
     * @function clickfilter
     * @description Checks click source removing page scroll 
     * controls or TOC selector on change of focus.
     */
    function clickfilter(e) {
      let buttonid = e.target.id
      if (buttonid === 'pageup' || buttonid === 'pagedown') {
        return
      } else {
        deletechevrons()
      }
      if (buttonid === 'rightBTN' || buttonid === 'leftBTN') {
        return
      } else {
        deletearrows()
      }
    }
    /**
     * @function addbutton
     * @description  Creates a button list element.
     * @param {string} id - The ID for the button.
     * @param {string} buttontype - The type of button (CSS class).
     * @param {string} side - The side to float the button ('left' or 'right').
     * @param {boolean} indicator - Indicates if the button is an indicator (true or false).
     * @returns {HTMLElement} - The created list item element containing the button.
     */
    function addbutton(id, buttontype, side, indicator) {
      let a = document.createElement('a')
      a.id = id
      a.className = buttontype
      a.textContent = buttontype
      if (indicator) {
        a.style = 'background-position: 0 0px; margin-top: 0px; margin-left: 0px;'
      } else { a.href = '#' }
      let li = document.createElement('li')
      li.style.float = side
      li.id = 'button_' + id
      li.appendChild(a)
      return li
    }
    /**
     * @function addbuttondropdown
     * @description  Creates a button list element with a dropdown menu.
     * @param {string} id - The ID for the button.
     * @param {string} buttontype - The type of button (CSS class).
     * @param {string} side - The side to float the button ('left' or 'right').
     * @param {array} menuItems
     * @returns {HTMLElement} - The created list item element containing the button.['Load', 'Default']
     */
    function addbuttondropdown(id, buttontype, side, menuItems) {
      let content = document.createElement('div')
      let dropdownfunctions = {'Load': fileload, 'Default': loaddefault}
      let a = document.createElement('a')
      a.id = id
      a.className = buttontype
      a.textContent = buttontype
      a.href = '#'
      let li = document.createElement('li')
      li.style.float = side
      li.id = 'button_' + id
      li.appendChild(a)
      content.classList.add('dropdown')
      let ul = document.createElement('ul')
      ul.id = 'ul_' + id
      menuItems.forEach(item => {
        let listItem = document.createElement('li')
        let itemLink = document.createElement('a')
        itemLink.href = '#'
        itemLink.textContent = item
        listItem.appendChild(itemLink)
        ul.appendChild(listItem)
      })
      content.appendChild(ul)
      ul.addEventListener('click', (event) => {
        event.preventDefault()
        let target = event.target
        if (target.tagName === 'A') {
          let itemname = target.textContent.trim()
          dropdownfunctions[itemname]()
        }
      })
      li.appendChild(content)
      return li
    }
    /**
     * @function addtablearrow
     * @description Adds a new button to the toolbar.
     * @param {string} buttonId - The ID of the new button.
     * @param {string} buttonclass - The class of the new button.
     * @param {string} buttontext - The text of the new button.
     */
    function addtablearrow(buttonId, buttonclass, buttontext) {
      let bar = document.getElementById("dynamotoolbar")
      let buttonlist = bar.querySelector('.dynamo-menu')
      let bookbutton = buttonlist.querySelector('#button_book')
      let newbutton = document.createElement('li')
      newbutton.setAttribute('style', 'float: right;')
      newbutton.setAttribute('id', buttonId)
      newbutton.innerHTML = `<a id="${buttonclass}" class="${buttonclass}" href="#">${buttontext}</a>`
      if (bookbutton.previousSibling) {
          buttonlist.insertBefore(newbutton, bookbutton)
      } else {
          buttonlist.appendChild(newbutton)
      }
    }
    /**
    * @function addarrowleft
    */
    function addarrowleft() {
      addtablearrow('button_left', 'leftBTN', 'leftBTN')
    }
    /**
    * @function addarrowright
    */
    function addarrowright() {
      addtablearrow('button_right', 'rightBTN', 'rightBTN')
    }
    /**
     * @function deletearrows
     * @description Deletes any arrow button from the toolbar.
     */
    function deletearrows() {
      let bar = document.getElementById("dynamotoolbar")
      let buttonlist = bar.querySelector('.dynamo-menu')
      let arrowbuttons = ['#button_left', '#button_right']
      arrowbuttons.forEach(buttonId => {
          let buttontodelete = buttonlist.querySelector(buttonId)
          if (buttontodelete) {
              buttonlist.removeChild(buttontodelete)
          }
      })
    }
    /**
    * @function addpagescroll
    * @description Adds page scroll buttons to the toolbar.
    */
    function addpagescroll() {
      let bar = document.getElementById("dynamotoolbar")
      let buttonlist = bar.querySelector('.dynamo-menu')
      if (!buttonlist.querySelector('#button_up')) {
        let bookbutton = buttonlist.querySelector('#button_book')
        let newbutton = document.createElement('li')
        newbutton.setAttribute('style', 'float: right')
        newbutton.setAttribute('id', 'button_down')
        newbutton.innerHTML = `<a id="pagedown" class="pageoutBTN" href="#">pageoutBTN</a>`
        bookbutton.insertAdjacentElement('afterend', newbutton)
        newbutton = document.createElement('li')
        newbutton.setAttribute('style', 'float: right')
        newbutton.setAttribute('id', 'button_up')
        newbutton.innerHTML = `<a id="pageup" class="pageinBTN" href="#">pageinBTN</a>`
        bookbutton.insertAdjacentElement('afterend', newbutton)
      }
    }
    /**
     * @function deletechevrons
     * @description Deletes the pageoutBTNs from the toolbar.
     */
    function deletechevrons() {
      let bar = document.getElementById("dynamotoolbar")
      let buttonlist = bar.querySelector('.dynamo-menu')
      let chevronbuttons = ['#button_down', '#button_up']
      chevronbuttons.forEach(buttonId => {
        let buttontodelete = buttonlist.querySelector(buttonId)
        if (buttontodelete) {
          buttonlist.removeChild(buttontodelete)
        }
      })
    }
    /**
     * @function loadtooltips
     * @description Tooltips for menu buttons.
     */
    function loadtooltips() {
      document.getElementById('fileload').setAttribute('title', 'Load Dynamo Cards')
      document.getElementById('list').setAttribute('title', 'Equation Cards')
      document.getElementById('hashtag').setAttribute('title', 'Initial Values')
      document.getElementById('shapesstack').setAttribute('title', 'Processed Cards')
      document.getElementById('shapes').setAttribute('title', 'Initial Variable Space')
      document.getElementById('run').setAttribute('title', 'Run Model')
      document.getElementById('print').setAttribute('title', 'Print Results')
      document.getElementById('plot').setAttribute('title', 'Plot Results')
      document.getElementById('csvdata').setAttribute('title', 'Print or Plot CSV File')
    }
    /**
     * @function statusColor
     * @description  Shifts the background position of the button matchingthe StatusID.
     * @param {string} StatusID - The ID of the status button element.
     * @param {number} shift - Specifieds the amount to shift the background button image by.
     */
    function statusColor(StatusID, shift) {
      let anchor = document.getElementById(StatusID)
      if (anchor) {
        anchor.style = 'background-position: 0 ' + (-30 * (shift % 7)).toString()
        + 'px; margin-top: 0px; margin-left: 0px;'
      }
    }
    /**
     * @function list
     * @description Code for button.
     */
    function list() {
      readcarddeck()
    }
    /**
    * @function hashtag
    * @description Code for button.
    */
    function hashtag() {
      findinitialvalues()
      printvaluearray(valuesarray)
    }
    /**
     * @function shapestack
     * @description Code for button.
     */
    function shapestack() {
      processcards()
    }
    /**
     * @function shapes
     * @description Code for button.
     */
    function shapes() {
      buildvariablesmap()
      printmap(valuesmap)
    }
    /**
    * @function run
    * @description Code for button.
    */
    function run() {
      buildvariablesmap()
      evaluatemodel()
      printmap(valuesmap)
    }
    /**
     * @function print
     * @description Code for button.
     */
    function print() {
      printresults()
    }
    /**
     * @function plot
     * @description Code for button.
     */
    function plot() {
      graphresults()
    }
    /**
     * @function save
     * @description Code for button.
     */
    function save() {
      saveresults()
    }
    /**
     * @function saveresults
     * @description A csv file is created from print or plot results.
     */
    function saveresults() {
      if (savemode !== undefined) {
        if (savemode === "plot") {
          exportcsv("plotdata",plotcsv)
        }
        if (savemode === "print") {
          exportcsv("printdata",printcsv)
        }
      }
    }
    /**
     * @function manpagedown
     * @description Code for button.
     */
    function manpagedown() {
      defaultmodeltext.previouspage()
    }
    /**
     * @function manpageup
     * @description Code for button.
     */
    function manpageup() {
      defaultmodeltext.nextpage()
    }
    /**
     * @function funstuff
     * @description Code for button.
     */
    function funstuff() {
      const svg = defaultplottext.getplot()
      const container = document.getElementById('dynamodisplay')
      container.innerHTML = svg
    }
    /**
     * @function book
     * @description Code for button.
     */
    function book() {
      defaultmodeltext.showTOCpage1()
    }
    /**
     * @function left
     * @description Code for button.
     */
    function left() {
      defaultmodeltext.showTOCpage1()
    }
    /**
     * @function right
     * @description Code for button.
     */
    function right() {
      defaultmodeltext.showTOCpage2()
    }
    /**
     * @function homepage
     * @description Launch homepage.
     */
    function homepage() {
      window.location.href = 'https://chasingthesquirrel.com/'
    }
    /**
     * @function readfile
     * @description Reads a Dynamo card file and loads an array
     * with card text. 
     * @param {string} file - The filepath
     */
    function readfile(file) {
      let reader = new FileReader()
      reader.onload = function(e) {
        filecontents = e.target.result
        loaddynamocards()
      }
      reader.readAsText(file)
    }
    /**
     * @function loaddynamocards
     * @description Loads and shows the Dynamo card file. 
     */
    function loaddynamocards() {
      let linearray = filecontents.split('\n').map(line => line.trim())
      let text = ''
      let line
      linesarray = []
      for (let i = 0; i < linearray.length; i++) {
        line = readdynamocard(linearray[i])
        if (line.cardtext) {
          linesarray.push(line)
          text += line.cardtext
        }
      }
      const outputdiv = document.getElementById('dynamodisplay')
      outputdiv.innerHTML = text
    }
    /**
    * @function readdynamocard
    * @description Reads a Dynamo card, constructing an objects to hold
    * data.  All cards have a type which defines the meaning of line object content.
    * Each card type has a procedure that constructs a line object.
    * @param {string} linetext - Dynamo card text.
    * @returns {Object} An object wrapping data extracted from card text.
    */
    function readdynamocard(linetext) {
      let line = {}
      let spaces
      if (linetext.charAt(0).match(/[0-9]/)) {
        line.type = 'equation'
        let match = linetext.match(/\d+/)
        line.equationnumber = match[0]
        let equationtype = linetext.indexOf(match[0]) + match[0].length
        line.equationtype = linetext[equationtype]
        let parts = linetext.split(/\s+/)
        line.content = parts[1]
        line.equationcomment = parts.slice(2).join(' ')
        line.cardtext = '<p class="line">'
        line.cardtext += line.equationnumber
        line.cardtext += line.equationtype
        spaces = 6 - (line.equationnumber.length + line.equationtype.length)
        line.cardtext += '&nbsp;'.repeat(spaces)
        line.cardtext += line.content
        spaces = 41 - (line.content.length)
        line.cardtext += '&nbsp;'.repeat(spaces)
        line.cardtext += line.equationcomment
        line.cardtext += '</p>'
      } else if (linetext.charAt(0).match(/[A-Z]/)) {
        let words = linetext.split(/\s+/)
        let word = words[0]
        let remainingtext = words.slice(1).join(' ')
        switch (word) {
        case 'RUN':
          line.type = 'run'
          line.cardtext = '<p class="line">RUN'
          line.cardtext += '&nbsp;'.repeat(3)
          line.cardtext += remainingtext
          line.cardtext += '</p>'
          line.runcode = remainingtext
          break
        case 'SPEC':
          line.type = 'spec'
          let settings = remainingtext.split('/')
          line.settingarray = settings.map(setting => {
            let parts = setting.split('=')
            return [parts[0], parts[1]]
          })
          line.cardtext = '<p class="line">SPEC'
          line.cardtext += '&nbsp;'.repeat(2)
          for (let i = 0; i < line.settingarray.length; i++) {
            let element = line.settingarray[i]
            line.cardtext += element[0] + '=' + element[1]
            if (i < line.settingarray.length - 1) {
            line.cardtext += '/'
            }
          }
          line.cardtext += '</p>'
          break
        case 'NOTE':
          line.type = 'note'
          line.cardtext = '<p class="line">NOTE'
          spaces = 68 - remainingtext.length
          spaces = 2
          line.cardtext += '&nbsp;'.repeat(spaces)
          line.cardtext += remainingtext
          line.cardtext += '</p>'
          line.content = remainingtext
          break
        case 'C':
          let elements
          line.type = 'constant'
          line.cardtext = '<p class="line">C'
          spaces = 5
          line.cardtext += '&nbsp;'.repeat(spaces)
          remainingtext = remainingtext.replace('=', ' ')
          elements = remainingtext.split(' ')
          line.name = elements[0]
          line.value = elements[1]
          line.units = elements[2]
          line.cardtext += elements[0] + '&nbsp;=&nbsp;' + elements[1] + '&nbsp;' + elements[2]
          if (elements[3]) {
            remainingtext = elements.slice(3).join(' ')
            spaces = 37 - (elements[0].length + elements[1].length + elements[2].length)
            line.cardtext += '&nbsp;'.repeat(spaces)
            line.cardtext += remainingtext
          }
          line.cardtext += '</p>'
          break
        case 'PRINT':
          line.type = 'print'
          let columns2 = remainingtext.split('/')
          line.printvars = []
          line.printcolumns = columns2.map(substring => {
            let end = substring.indexOf(')')
            let numberstring = substring.substring(0, end)
            let number = parseInt(numberstring, 10)
            substring = substring.substring(end + 1)
            let elements = substring.split(',').map(element => {
            if (element === '*') return ['*']
            let [name, value] = element.split('(')
            value = value ? value.slice(0, -1) : '0.0'
            let [exponent, points] = value.split('.').map(Number)
            return [name, exponent || 0, points || 0]
            })
            line.printvars.push(elements)
            return [number, elements]
          })
          line.cardtext = '<p class="line">PRINT&nbsp;'
          for (let i = 0; i < line.printcolumns.length; i++) {
            let element = line.printcolumns[i]
            let number = element[0]
            let items = element[1].map(e => {
            if (e[0] === '*') {
              return '*'
            }
            return `${e[0]}(${e[1]}.${e[2]})`
            }).join(',')
            line.cardtext += number + ')' + items
            if (i < line.printcolumns.length - 1) {
            line.cardtext += '/'
            }
          }
          line.cardtext += '</p>'
        break
        case 'PLOT':
          line.type = 'plot';
          let scalegroups = remainingtext.split('/')
          let plotvariables = []
          line.plotvars = []
          let plotgroup = 1
          for (let text of scalegroups) {
            let parsedVariables = parseVariable(text, plotgroup)
            plotvariables.push(...parsedVariables)
            plotgroup++
          }
          let lowerlim = '*'
          let upperlim = '*'
          let currentgroup = null
          for (let i = plotvariables.length - 1; i >= 0; i--) {
            let group = plotvariables[i][1].PG
            if (plotvariables[i][0] === '(') {
            lowerlim = plotvariables[i][1].LL
            upperlim = plotvariables[i][1].UL
            currentgroup = group
            } else {
            if (currentgroup === null) {
              currentgroup = group
            }
            if (currentgroup !== group) {
              lowerlim = '*'
              upperlim = '*'
              currentgroup = group
            }
            let vardata = { 'PG': group, 'CH': plotvariables[i][1].CH, 'LL': lowerlim, 'UL': upperlim, 'MIN': 0, 'MAX': 0 }
            line.plotvars.push([plotvariables[i][0], vardata])
            }
          }
          line.plotvars.reverse()
          let varcount = line.plotvars.length
          line.cardtext = '<p class="line">PLOT'
          line.cardtext += '&nbsp;'.repeat(2)
          currentgroup = 1
          lowerlim = line.plotvars[0][1].LL
          upperlim = line.plotvars[0][1].UL
          for (let i = 0; i < varcount; i++) {
            if (currentgroup === line.plotvars[i][1].PG) {
            line.cardtext += line.plotvars[i][0] + '=' + line.plotvars[i][1].CH
            if((i < (varcount - 1))&&(line.plotvars[i + 1][1].PG === currentgroup)) {
              line.cardtext += ','
            } else {
              if ((lowerlim !== '*') || (upperlim !== '*')) {
                line.cardtext += '(' + lowerlim + ',' + upperlim + ')'
              }
            }
            } else {
            currentgroup++
            lowerlim = line.plotvars[i][1].LL
            upperlim = line.plotvars[i][1].UL
            if (i < (varcount - 1)) { 
              line.cardtext += '/'
            }
            }
          }
          line.cardtext += '</p>'
          function parseVariable(text, group) {
            const variables = []
            let i = 0
            while (i < text.length) {
            let varname = ''
            let character = ''
            let lowerlim = '*'
            let upperlim = '*'
            while (text[i] !== '=') {
              varname += text[i++]
            }
            i++
            character = text[i++]
            let vardata = { 'PG': group, 'CH': character, 'LL': lowerlim, 'UL': upperlim, 'MIN': 0, 'MAX': 0 }
            variables.push([varname, vardata])
            if (text[i] === '(') {
              varname = '('
              i++
              lowerlim = ''
              while (text[i] !== ',') {
                lowerlim += text[i++]
              }
              i++
              upperlim = ''
              while (text[i] !== ')') {
                upperlim += text[i++]
              }
              i++
              vardata = { 'PG': group, 'CH': character, 'LL': lowerlim, 'UL': upperlim, 'MIN': 0, 'MAX': 0 }
              variables.push([varname, vardata])
            }
            if (text[i] === ',') {
              i++
            } else if (text[i] === '/') {
              i++
            }
            }
            return variables
          }
          break
        default:
          if (word.match(/^X\d+$/)) {
            line.type = 'continuation'
            line.cardtext = '<p class="line">X'
            line.continuenumber = word.slice(1)
            line.cardtext += line.continuenumber
            spaces = 7 - word.length
            line.cardtext += '&nbsp;'.repeat(spaces)
            line.cardtext += remainingtext
            line.cardtext += '</p>'
            line.content = remainingtext
          } else {
            line.type = 'unknown'
          }
          break
        }
      } else if (linetext.charAt(0).match(/[\*]/)) {
        line.type = 'job'
        line.cardtext = '<p class="line">*'
        line.cardtext += '&nbsp;'.repeat(5)
        let words = linetext.split(/\s+/)
        line.cardtext += words[1]
        line.cardtext += '</p>'
        line.jobcontent = words[1].split(',')
      }
      return line
    }
    /**
     * @function mergecontinuecards
     * @description Combines the content of continue cards with preceding content.
     * @param {array} lines - The Dynamo card lines array.
     * @returns {array} The linesarray with merged content.
     */
    function mergecontinuecards(lines) {
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].type === 'continuation') {
        let j = i
        let count = 0
        while (i < lines.length && lines[i].type === 'continuation') {
          count++
          i++
        }
        const continuecards = lines.slice(j, j + count)
        continuecards.sort((a, b) => a.continuenumber - b.continuenumber)
        for (let k = 0; k < continuecards.length; k++) {
          lines[j - 1].content += continuecards[k].content
        }
        lines.splice(j, count)
        i = j - 1
        }
      }
      return lines
    }
    /**
     * @function loadspeccard
     * @description Reads the spec card.
     * 'DT' the time increment, 'LENGTH' the time to run, 'PRTPER'
     * and PLTPER give cycle counts that determine when to sample 
     * for print and plot.  A count set to zero disables 
     * printing or plotting.  Global variables are set.
     * @param {array} lines - The Dynamo card array.
     */
    function loadspeccard(lines) {
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].type === 'spec') {
        let settings = lines[i].settingarray
        settings.forEach(setting => {
          let [key, value] = setting
          switch (key) {
            case 'DT':
            DT = Number(value)
            break
            case 'LENGTH':
            LENGTH = Number(value)
            break
            case 'PRTPER':
            PRTPER = Number(value)
            break
            case 'PLTPER':
            PLTPER = Number(value)
            break
          }
        })
        }
      }
    }
    /**
    * @function sortcardsbytype
    * @description Sorts Dynamo cards by type.
    * Level cards followed by auxilary cards followded by 
    * rate and initialization cards.
    * @param {array} lines - The Dynamo card array.
    * @returns {array} - The sorted card array.
    */
    function sortcardsbytype(lines) {
      lines.sort((a, b) => {
        if (a.type === 'equation' && b.type === 'equation') {
        const order = { 'L': 1, 'A': 2, 'R': 3, 'N': 4 }
        return order[a.equationtype] - order[b.equationtype]
        }
        if (a.type === 'equation') return -1
        if (b.type === 'equation') return 1
        return 0
      })
      return lines
    }
    /**
     * @function loadequations
     * @description Loads the Dynamo reference equations
     */
    function loadequations() {
      equationlist = [
        ["1L", "V.K=V.J+(DT)(~P~Q)", [0, 4, 9, 14, 16]],
        ["52L", "V.K=V.J+(DT)(~P~Q~R~S)", [0, 4, 9, 14, 16, 18, 20]],
        ["2L", "V.K=V.J+(DT)(~P~Q~R~S~T~U)", [0, 4, 9, 14, 16, 18, 20, 22, 24]],
        ["3L", "V.K=V.J+(DT)(1/~Y)(~P~Q)", [0, 4, 9, 16, 20, 22]],
        ["4L", "V.K=V.J+(DT)(1/~Y)(~P~Q~R~S~T~U)", [0, 4, 9, 16, 20, 22, 24, 26, 28, 30]],
        ["5L", "V.K=V.J+(DT)(1/~Y)(~P~Q)+(1/~Z)(~R~S)", [0, 4, 9, 16, 20.22, 29, 33, 35]],
        ["6", "V=~P", [0, 3]],
        ["7", "V=~P~Q", [0, 3, 5]],
        ["8", "V=~P~Q~R", [0, 3, 5, 7]],
        ["9", "V=~P~Q~R~S", [0, 3, 5, 7, 9]],
        ["10", "V=~P~Q~R~S~T~U", [0, 3, 5, 7, 9, 11, 13]],
        ["11", "V=~P~Q~R~S~T~U~W~X", [0, 3, 5, 7, 9, 11, 13, 15, 17]],
        ["12", "V=(~P)(~Q)", [0, 4, 8]],
        ["13", "V=(~P)(~Q)(~R)", [0, 4, 8, 12]],
        ["14", "V=~P+(~Q)(~R)", [0, 3, 7, 11]],
        ["15", "V=(~P)(~Q)+(~R)(~S)", [0, 4, 8, 13, 17]],
        ["16", "V=(~P)(~Q)+(~R)(~S)+(~T)(~U)+(~W)(~X)", [0, 4, 8, 13, 17, 22, 26, 31, 35]],
        ["17", "V=(~P)(~Q)(~R)+(~S)(~T)(~U)+(~W)(~X)(~Y)", [0, 4, 8, 12, 17, 21, 25, 30, 34, 38]],
        ["18", "V=(~P)(~Q~R)", [0, 4, 8, 10]],
        ["19", "V=(~P)(~Q~R~S~T)", [0, 4, 8, 10, 12, 14]],
        ["20", "V=~P/~Q", [0, 3, 6]],
        ["44", "V=(~P)(~Q)/~R", [0, 4, 8, 12]],
        ["42", "V=~P/((~Q)(~R))", [0, 3, 8, 12]],
        ["46", "V=(~P)(~Q)(~R)/(~S)(~T)(~U))", [0, 4, 8, 12, 17, 21, 25]],
        ["21", "V=(1/~Y)(~P~Q)", [0, 6, 10, 12]],
        ["24", "V=(1/~Y)(~P~Q~R~S~T~U)", [0, 6, 10, 12, 14, 16, 18, 20]],
        ["22", "V=(1/~Y)((~P)(~Q)(~R)(~S))", [0, 6, 11, 15, 19, 23]],
        ["23", "V=(1/~Y)(~P~Q)+(1/~Z)(~R~S)", [0, 6, 10, 12, 19, 23, 25]],
        ["27", "V=(~P/~Q)~R", [0, 4, 7, 10]],
        ["40", "V=~P+(1/~Q)(~R~S)", [0, 3, 9, 13, 15]],
        ["25", "V=~P+(1/~Q)(~R~S~T~U~W~X)", [0, 3, 9, 13, 15, 17, 19, 21, 23]],
        ["48", "V=~P/(~Q~R)", [0, 3, 7, 9]],
        ["50", "V=(~P)(~Q)/(~R~S)", [0, 4, 8, 13, 15]],
        ["26", "V=(~P~Q~R)/(~S~T~U)", [0, 4, 6, 8, 13, 15, 17]],
        ["28", "V=(~P)EXP(~Q)", [0, 4, 11]],
        ["29", "V=(~P)LOGN(~Q)", [0, 4, 12]],
        ["30", "V=(~P)SQRT(~Q)", [0, 4, 12]],
        ["31", "V=(~P)SIN((2PI)(~Q)/~R)", [0, 4, 17, 21]],
        ["32", "V=(~P)COS((2PI)(~Q)/~R)", [0, 4, 17, 21]],
        ["33", "V=(P)NOISE", [0, 3]],
        ["34", "V=(~P)NORMRN(~Q,R)", [0, 4, 14, 16]],
        ["39", "V=DELAY3(~P,C)", [0, 10, 12]],
        ["41", "V=PULSE(~P,Q,R)", [0, 9, 11, 13]],
        ["45", "V=STEP(~P,Q)", [0, 8, 10]],
        ["47", "V=RAMP(~P,Q)", [0, 8, 10]],
        ["43", "V=SAMPLE(~P,Q)", [0, 10, 12]],
        ["56", "V=MAX(~P,~Q)", [0, 7, 10]],
        ["54", "V=MIN(~P,~Q)", [0, 7, 10]],
        ["51", "V=CLIP(~P,~Q,~R,~S)", [0, 8, 11, 14, 17]],
        ["49", "V=SWITCH(~P,~Q,R)", [0, 10, 13, 15]],
        ["59", "V=TABLE(NAME,P,~N1,~N2,~N3)", [0, 8, 13, 16, 20, 24]],
        ["58", "V=TABHL(NAME,P,~N1,~N2,~N3)", [0, 8, 13, 16, 20, 24]],
        ["35", "V=BOXCYC(N,P)", [0, 9, 11]],
        ["37", "V=BOXLIN(N,P)", [0, 9, 11]],
        ["36", "V=BOXLOAD(~P,~Q)", [0, 11, 14]],
        ["53", "V=SUM1(N,P)", [0, 7, 9]],
        ["55", "V=SUM2(N,P,Q)", [0, 7, 9, 11]],
        ["57", "V=SUM3(N,P,Q,R)", [0, 7, 9, 11, 13]]
      ]
    }
    /**
     * @function findequation
     * @description Extracts a variable name from content starting at cardptr.
     * @param {string} number - The Dynamo equation number
     * @param {string} type - L indicates Level
     * @returns {string} The reference equation.
     */
    function findequation(number, type) {
      let index = number
      if (type === 'L') index += type
      for (let i = 0; i < equationlist.length; i++) {
        if (equationlist[i][0] === index) {
        return [equationlist[i][0], equationlist[i][1], equationlist[i][2]]
        }
      }
    }
    /**
     * @function equationdata
     * @description Adds eqnflags, ,equation, equationptr, and varpairs to a
     * modelcard
     * @param {array} cardstack - The modelcards array.
     */
    function equationdata(cardstack) {
      let index, equationcard
      index = cardstack.length - 1
      equationcard = cardstack[index]
      cardstack[index] = buildshortlist(equationcard)
      return cardstack
    }
    /**
     * @function loadmodelcards
     * @description Data from equation and constant cards are read 
     * into an array.  The array defines model equations and initial conditions.
     * @param {array} lines The lines array.
     * @returns {array} The model and initial conditions.
     */
    function loadmodelcards(lines) {
      let modelcard
      let cardnumber = 1
      let cardstack = []
      loadequations()
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].type === 'equation') {
        modelcard = {
          cardnumber: cardnumber++,
          equationtype: lines[i].equationtype,
          equationnumber: lines[i].equationnumber,
          content: lines[i].content
        }
        cardstack.push(modelcard)
        cardstack = equationdata(cardstack)
        }
        if (lines[i].type === 'constant') {
        modelcard = {
          cardnumber: cardnumber++,
          equationtype: 'C',
          content: lines[i].name + '=' + lines[i].value,
          variable: lines[i].name,
          value: lines[i].value,
          units: lines[i].units
        }
        cardstack.push(modelcard)
        }
      }
      return cardstack
    }
    /**
     * @function printmodelcards
     * @description Prints model cards.  Order of output matches the modelcard array.
     * The equation type is printed followed by the Dynamo equation number.
     * Followed by the card equation.
     */
    function printmodelcards(cardstack) {
      let text = ''
      for (let i = 0; i < cardstack.length; i++) {
        if (cardstack[i].equationtype === 'C') {
        text += '<p class="line">' + cardstack[i].equationtype +
          '&nbsp;&nbsp;&nbsp;&nbsp;' + cardstack[i].content + '&nbsp;' + cardstack[i].units + '</p>'
        } else {
        text += '<p class="line">' + cardstack[i].equationtype + '&nbsp;' +
          cardstack[i].equationnumber +
          (cardstack[i].equationnumber.length === 1 ? '&nbsp;&nbsp;' : '&nbsp;') +
          cardstack[i].content + '</p>'
        }
      }
      const outputdiv = document.getElementById('dynamodisplay')
      outputdiv.innerHTML = text
    }
    /**
    * @function printvaluearray
    * @description Prints values array.
    * @param {array} valuesarray - Initialization values.
    */
    function printvaluearray(valuesarray) {
      let text = ""
      for (let i = 0; i < valuesarray.length; i++) {
        text += '<p class="line">' + valuesarray[i][0] + "&nbsp;&nbsp;" + valuesarray[i][1] + '</p>'

      }
      const outputdiv = document.getElementById('dynamodisplay')
      outputdiv.innerHTML = text
    }
    /**
    * @function deepcopy
    * @description Recursively copies an object or array, preserving property structure.
    * @param {object|array} obj - The object or array to copy.
    * @returns {object|array} A deep copy of the object or array.
    */
    function deepcopy(obj) {
      if (obj === null || typeof obj !== 'object') {
        return obj
      }
      if (obj instanceof Array) {
        let copy = []
        for (let i = 0; i < obj.length; i++) {
        copy[i] = deepcopy(obj[i])
        }
        return copy
      }
      if (obj instanceof Object) {
        let copy = {}
        for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          copy[key] = deepcopy(obj[key])
        }
        }
        return copy
      }
    }
    /**
     * @function compareequationtype
     * @description Helper function to sortbytype.
     */
    const order = ["C", "N", "L", "A", "R"]
    function compareequationtype(a, b) {
      return order.indexOf(a.equationtype) - order.indexOf(b.equationtype)
    }
    /**
    * @function renumbercards
    * @description Renumbers cards.
    * @param {array} cardstack - modelcards array
    * @returns {array} Modified array.
    */
    function renumbercards(cardstack) {
      for (let i = 0; i < cardstack.length; i++) {
        cardstack[i].cardnumber = i + 1
      }
      return cardstack
    }
    /**
     * @function sortbytype
     * @description Sorts and renumbers cards by type.  Order by C N L A R type.
     * This is the order of evaluation.
     */
    function sortbytype(cardstack) {
      cardstack.sort(compareequationtype)
      cardstack = renumbercards(cardstack)
      return cardstack
    }
    /**
     * @function bubbletop
     * @description Moves a card for an argument variable above a card using the variable.
     */
    function bubbletop(x, y, cardstack) {
      let cardnumbermap = new Map()
      for (let i = 0; i < cardstack.length; i++) {
        cardnumbermap.set(cardstack[i].cardnumber, i)
      }
      let index1 = cardnumbermap.get(x)
      let index2 = cardnumbermap.get(y)
      let [element] = cardstack.splice(index2, 1)
      if (index2 < index1) {
        index1--
      }
      cardstack.splice(index1, 0, element)
      return cardstack
    }
    /**
     * @function variableprefix
     * @description Extracts a variable prefix.
     * @param {string} variable - A Dynamo variable.
     * @returns {string} The variable prefix.
     */
    function variableprefix(variable) {
      return (variable.split('.')[0])
    }
    /**
     * @function indexvariablearguments
     * @description Creates the variablelist
     */
    function indexvariablearguments(cardstack) {
      let variablelist = []
      for (let i = 0; i < cardstack.length; i++) {
        if (cardstack[i].equationtype === 'C') {
        variablelist.push([cardstack[i].variable, cardstack[i].cardnumber])
        } else {
        variablelist.push([variableprefix(cardstack[i].variable[1]),
        cardstack[i].cardnumber])
        }
      }
      for (let i = 0; i < cardstack.length; i++) {
        if (cardstack[i].equationtype !== 'C') {
        let argsindex = []
        for (let j = 0; j < cardstack[i].arguments.length; j++) {
          let prefix = variableprefix(cardstack[i].arguments[j][1])
          let index = -1
          for (let k = 0; k < variablelist.length; k++) {
            if (variablelist[k][0] === prefix) {
            index = variablelist[k][1]
            break
            }
          }
          argsindex.push([prefix, index])
        }
        cardstack[i].argsindex = argsindex
        }
      }
      renumbercards(cardstack)
      return cardstack
    }
    /**
    * @function saveinitialivalue
    * @description Filters out 'L' equations with variables which also appear
    * in an 'N' equation.  Only 'N' equations provide initial values.
    */
    function saveinitialivalue(cardstack) {
      let nvariables = cardstack.filter(card => card.equationtype === 'N').map(card => card.variable)
      let lvariables = cardstack.filter(card => card.equationtype === 'L').map(card => card.variable)
      let ltoremove = lvariables.filter(lvar => nvariables.includes(lvar))
      return cardstack.filter(card => card.equationtype === 'L' || !ltoremove.includes(card.variable))
    }
    /**
     * @function sortedvariables
     * @description 
     */
    function sortedvariables(cardstack) {
      let sorted = false
      while (!sorted) {
        sorted = true
        for (let i = 0; i < cardstack.length; i++) {
        if (cardstack[i].equationtype !== 'C') {
          for (let j = 0; j < cardstack[i].argsindex.length; j++) {
            if (cardstack[i].argsindex[j][1] > cardstack[i].cardnumber) {
            bubbletop(cardstack[i].cardnumber, cardstack[i].argsindex[j][1], cardstack)
            cardstack = indexvariablearguments(cardstack)
            sorted = false
            break
            }
          }
        }
        if (!sorted) break
        }
      }
      return cardstack
    }
    /**
    * @function evaluatevariables
    * @description Evaluates all modelcards and updates the valuesarray.
    * @param {array} cardstack - Array of modelcard objects to evaluate.
    * @param {array} valuesarray - The current array of variable values.
    * @returns {array} Updated valuesarray.
    */
    function evaluatevariables(cardstack, valuesarray) {
      let argument
      let value
      let arguments
      let argvalues = []
      TIME = 0
      delayindex = 1
      for (let i = 0; i < cardstack.length; i++) {
        if (cardstack[i].equationtype === 'C') {
        valuesarray.push([cardstack[i].variable, cardstack[i].value])
        } else {
        arguments = cardstack[i].arguments
        argvalues = []
        for (let j = 0; j < arguments.length; j++) {
          let found = false
          for (let k = 0; k < valuesarray.length; k++) {
            argument = variableprefix(arguments[j][1])
            value = valuesarray[k][0]
            if (argument === value) {
            argvalues.push(valuesarray[k][1])
            found = true
            break
            }
          }
          if (!found) {
            argvalues.push(parseFloat(arguments[j][1]))
          }
        }
        argvalues.push(cardstack[i].eqnflags)

        value = cardstack[i].equationptr(...argvalues)
        valuesarray.push([variableprefix(cardstack[i].variable[1]), value])
        }
      }
      return valuesarray
    }
    /**
     * @function buildshortlist
     */
    function buildshortlist(modelcard) {
      let equationform, equationvars, variable, polarity, varpairs = [], eqnflags = []
      equationform = findequation(modelcard.equationnumber, modelcard.equationtype)
      modelcard.equationptr = functions['eqn' + equationform[0]]
      modelcard.equation = equationform[1]
      equationvars = equationform[2]
      for (let j = 0, k = 0; j < modelcard.equation.length; j++) {
        if (equationvars.includes(j)) {
        placeholder = extractvariable(modelcard.equation, j)
        j += placeholder.length - 1
        variable = extractvariable(modelcard.content, k)
        k += variable.length
        varpairs.push([placeholder, variable])
        } else if (modelcard.equation[j] === '~') {
        polarity = 1
        if (modelcard.content[k] === '-') { polarity = -1 }
        eqnflags.push(polarity)
        if ((modelcard.content[k] === '+') || (modelcard.content[k] === '-')) {
          k++
        }
        } else if (modelcard.equation[j] === modelcard.content[k]) {
        k++
        } else {
        // mismatch in equation error
        }
      }
      modelcard.eqnflags = eqnflags
      modelcard.variable = varpairs[0]
      modelcard.arguments = varpairs.slice(1)
      modelcard.argsindex = []
      return modelcard
    }
    /**
    * @function replacedelaycards
    * @description Replaces DELAY3 cards.
    * @param {array} cardstack - Array of modelcards.
    * @returns {array} Modified array.
    */
    function replacedelaycards(cardstack) {
      let v, prefix, v1, v2, v3, args, modelcard
      for (let i = 0; i < cardstack.length; i++) {
        if (cardstack[i].equationnumber === "39") {
        v = cardstack[i].variable
        args = cardstack[i].arguments
        prefix = variableprefix(v[1])
        v1 = ('*' + String(delayindex++).padStart(3, '0'))
        v2 = ('*' + String(delayindex++).padStart(3, '0'))
        v3 = ('*' + String(delayindex++).padStart(3, '0'))
        cardstack[i].content = v[1] + '=' + prefix + ".JK" +
          "+(1/" + v3 + ")(" + v1 + ".JK-" + prefix + ".JK)"
        cardstack[i].equationnumber = "40"
        cardstack[i].equationtype = "R"
        cardstack[i] = buildshortlist(cardstack[i])
        modelcard = {
          cardnumber: 0, equationnumber: "40", equationtype: "R",
          content: v1 + ".KL=" + v1 + ".JK+(1/" + v3 + ")(" + v2 + ".JK-" + v1 + ".JK)"
        }
        modelcard = buildshortlist(modelcard)
        cardstack.splice(i + 1, 0, modelcard)
        modelcard = {
          cardnumber: 0, equationnumber: "40", equationtype: "R",
          content: v2 + ".KL=" + v2 + ".JK+(1/" + v3 + ")(" + variableprefix(args[0][1]) +
            ".JK-" + v2 + ".JK)"
        }
        modelcard = buildshortlist(modelcard)
        cardstack.splice(i + 2, 0, modelcard)
        i += 2
        }
      }
      return cardstack
    }
    /**
     * @function levelorauxiliaryvariable
     * @returns {object} A level or auxilary object
     */
    function levelorauxiliaryvariable() {
      let variable = {}
      variable['J'] = 0
      variable['K'] = 0
      return variable
    }
    /**
     * @function ratevariable
     * @returns {object} A rate object
     */
    function ratevariable() {
      let variable = {}
      variable['JK'] = 0
      variable['KL'] = 0
      return variable
    }
    /**
     * @function maxminvariable
     * @returns {object} A max min object
     */
    function maxminvariable() {
      let variable = {}
      variable['MAX'] = 0
      variable['MIN'] = 0
      return variable
    }
    /**
     * @function getvalue
     * @param {map} map - The variable map.
     * @param {string} text - The variable name.
     * {string} text - The variable name.
     */
    function getvalue(map, text) {
      if (text.includes('.')) {
        let [varname, property] = text.split('.')
        let variable = map.get(varname)
        if (variable && typeof variable === 'object') {
        return variable[property]
        }
      } else {
        return map.get(text)
      }
    }
    /**
     * @function setvalue
     * @param {Map} map - The variable map.
     * @param {string} text - The variable name.
     * @param {number} newvalue - The variable value.
     */
    function setvalue(map, text, newvalue) {
      if (text.includes('.')) {
        let [varname, property] = text.split('.')
        let variable = map.get(varname)
        if (variable && typeof variable === 'object') {
        variable[property] = newvalue
        }
      } else {
        map.set(text, newvalue)
      }
    }
    /**
     * @function hasvariable
     * @param {Map} map - The variable map.
     * @param {string} text - The variable name.
     * @returns {boolean} - True if the variable is in the map, false otherwise.
     */
    function hasvariable(map, text) {
      if (text.includes('.')) {
        let [varname, property] = text.split('.')
        let variable = map.get(varname)
        if (variable && typeof variable === 'object') {
        return property in variable
        }
      } else {
        return map.has(text)
      }
      return false
    }
    /**
     * @function initialvalue
     * @param {string} prefix - The variable name.
     * @returns {number} - The variable value.
     */
    function initialvalue(prefix) {
      for (let i = 0; i < valuesarray.length; i++) {
        if (valuesarray[i][0] === prefix) {
        return Number(valuesarray[i][1])
        }
      }
    }
    /**
     * @function printmap
     * @param {string} variablesmap - The variable map.
     */
    function printmap(variablesmap) {
      const table = document.createElement('table')
      table.id = 'variablesmap'
      const tablebody = document.createElement('tbody')
      for (const [key, value] of variablesmap) {
        const newRow = tablebody.insertRow()
        if (typeof value === 'number') {
        const cell1 = newRow.insertCell(0)
        newRow.insertCell(1).textContent = ''
        const cell2 = newRow.insertCell(2)
        newRow.insertCell(3).textContent = ''
        newRow.insertCell(4).textContent = ''
        cell1.textContent = key
        if (value >= 1000000) {
          cell2.textContent = parseFloat(value.toExponential(2))
        } else {
          cell2.textContent = parseFloat(value.toFixed(6))
        }
        } else {
        const valuekeys = Object.keys(value)
        const cell1 = newRow.insertCell(0)
        const cell2 = newRow.insertCell(1)
        const cell3 = newRow.insertCell(2)
        const cell4 = newRow.insertCell(3)
        const cell5 = newRow.insertCell(4)
        cell1.textContent = key
        cell2.textContent = valuekeys[0]
        if (value[valuekeys[0]] >= 1000000) {
          cell3.textContent = parseFloat(value[valuekeys[0]]).toExponential(2)
        } else {
          cell3.textContent = parseFloat(value[valuekeys[0]]).toFixed(6)
        }
        cell4.textContent = valuekeys[1]
        if (value[valuekeys[1]] >= 1000000) {
          cell5.textContent = parseFloat(value[valuekeys[1]]).toExponential(2)
        } else {
          cell5.textContent = parseFloat(value[valuekeys[1]]).toFixed(6)
        }
        }
      }
      table.appendChild(tablebody)
      const outputdiv = document.getElementById('dynamodisplay')
      outputdiv.innerHTML = ''
      outputdiv.appendChild(table)
    }
    /**
     * @function buildvariablesmap
     * @description The variables map is built on which the model is run.
     * Initial values are loaded into the map.  A model run uses 
     * scalar and complex (*.J, *.K) and (*.JL, *.KL) variables.  
     * The map accommodates all types.  The runcard array provides variables.
     * Constant values are added.
     */
    function buildvariablesmap() {
      let prefix, variable, value
      let variablesmap = new Map()
      for (let i = 0; i < runcards.length; i++) {
        prefix = variableprefix(runcards[i].variable[1])
        value = initialvalue(prefix)
        if (runcards[i].equationtype === 'L' || (runcards[i].equationtype === 'A')) {
        variable = levelorauxiliaryvariable()
        variablesmap.set(prefix, variable)
        setvalue(variablesmap, (prefix + '.J'), value)
        }
        if (runcards[i].equationtype === 'R') {
        variable = ratevariable()
        variablesmap.set(prefix, variable)
        setvalue(variablesmap, (prefix + '.JK'), value)
        }
      }
      for (let i = 0; i < valuesarray.length; i++) {
        if (hasvariable(variablesmap, valuesarray[i][0]) === false) {
        setvalue(variablesmap, valuesarray[i][0], Number(valuesarray[i][1]))
        }
      }
      valuesmap = variablesmap
    }
    /**
     * @function setmaxmin
     */
    function setmaxmin(name, value) {
      name = variableprefix(name)
      plotparameters.forEach(variable => {
        if (variable[0] === name) {
        variable[1].MIN = Math.min(variable[1].MIN || value, value)
        variable[1].MAX = Math.max(variable[1].MAX || value, value)
        }
      })
    }
    /**
     * @function timestep
     * @description The runcards are evaluated.  Variables needed to evaluate 
     * each card are collected.  A numbered Dynamo equation identified by a 
     * function pointer runs these variables to evaluate the run card variable.
     */
    function timestep() {
      let i, j, argument, arguments, name, value, values
      for (i = 0; i < runcards.length; i++) {
        values = []
        arguments = runcards[i].arguments
        for (j = 0; j < arguments.length; j++) {
        argument = arguments[j]
        if (i === 10) {
          test = true
        }
        if (isvariablename(argument[1])) {
          value = getvalue(valuesmap, argument[1])
          values.push(value)
        } else {
          values.push(argument[1])
        }
        }
        values.push(runcards[i].eqnflags)
        name = runcards[i].variable[1]
        value = runcards[i].equationptr(...values) //call the function pointer
        setvalue(valuesmap, name, value)
        setmaxmin(name, value)
      }
      loopcount++
    }
    /**
     * @function defineoutputarrays
     * @description Print and plot cards are read for variables for print and plot.  
     * Print and plot variables are placed in arrays and added to printcsv and plotcsv.
     * These arrays save ouput data as it is generated.
     * 'loopcount' is set to zero.  'loopcount' defines when output is collected.
     * @param {array} linesarray The array of Dynamo Cards
     */
    function defineoutputarrays(linesarray) {
      let printvars = [], plotvars = []
      let printread = false
      linesarray.forEach(function (line) {
        if (line.type === "print" && !printread) {
        printread = true
        line.printcolumns.forEach(function (column) {
          column[1].forEach(function (variable) {
            if (variable[0] !== '*') {
            printvars.push(variable[0])
            }
          })
        })
        }
      })
      let plotread = false
      linesarray.forEach(function (line) {
        if (line.type === "plot" && !plotread) {
        plotread = true
        line.plotvars.forEach(function (variable) {
          plotvars.push(variable[0])
        })
        plotparameters = line.plotvars
        }
      })
      printcsv = []
      plotcsv = []
      printcsv.push(printvars)
      plotcsv.push(plotvars)
      loopcount = 0
    }
    /**
     * @function exportcsv
     * @description Saves Dynamo run result to a CSV file.
     * @param {string} filename - The name of the new CSV file in Downloads.
     * @param {Array<Array<string>>} rows - The data rows to be saved.
     */
    function exportcsv(filename, rows) {
      let blob, csvfile = ''
      let processrow = function (row) {
        var exportstring = ''
        for (let j = 0; j < row.length; j++) {
        if (j === 0) {
          exportstring += row[j]
        } else { 
          exportstring += ','
          exportstring += row[j]
        }
        }
        return exportstring + '\n'
      }
      for (var i = 0; i < rows.length; i++) {
        csvfile += processrow(rows[i])
      }
      blob = new Blob([csvfile], { type: 'text/csv' })
      let url = URL.createObjectURL(blob)
      let a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      document.body.appendChild(a)
      a.click()
      document.body.appendChild(a)
      document.body.removeChild(a)
      document.body.appendChild(a)
    }
    /**
     * @function leveltest
     * @param {string} mapvariable The prefix of a doublevalue.
     * @returns {boolean} True if mapvariable is a level or an auxillary.
     * False if mapvariable is a rate.
     */
    function leveltest(mapvariable) {
      let keys = Object.keys(mapvariable)
      if (keys.includes('J')) {
        return true
      } else {
        return false
      }
    }
    /**
     * @function printplot
     * @description At times when PRTPER and PLTPER specify data is to be 
     * collected for printing or plotting values are written to the output arrays.
     */
    function printplot() {
      let printvals = [], plotvals = [], mapvariable
      if (PRTPER !== 0) {
        if (loopcount % PRTPER === 0) {
        printcsv[0].forEach(function (variable) {
          mapvariable = getvalue(valuesmap, variable)
          if (leveltest(mapvariable)) {
            printvals.push(mapvariable['J'])
          } else {
            printvals.push(mapvariable['JK'])
          }
        })
        printcsv.push(printvals)
        }
      }
      if (PLTPER !== 0) {
        if (loopcount % PLTPER === 0) {
        plotcsv[0].forEach(function (variable) {
          mapvariable = getvalue(valuesmap, variable)
          if (leveltest(mapvariable)) {
            plotvals.push(mapvariable['J'])
          } else {
            plotvals.push(mapvariable['JK'])
          }
        })
        plotcsv.push(plotvals)
        }
      }
    }
    /**
     * @function stepforward
     * @description Variables are moved from future to current 
     * time.  Time advances by DT.
     */
    function stepforward() {
      let newvalue, value, variable
      for (let i = 0; i < runcards.length; i++) {
        newvalue = runcards[i].variable[1]
        let [varname, property] = newvalue.split('.')
        variable = valuesmap.get(varname)
        value = variable[property]
        switch (property) {
        case 'K':
          variable['J'] = value
          break
        case 'KL':
          variable['JK'] = value
          break
        }
      }
      TIME += DT
    }
    /**
     * @function printresults
     * @description Using print card specifications data is printed.
     * varmap[[]] 
     */
    function printresults() {
      savemode = "print"
      let columnarrays = new Array(10).fill(null).map(() => [])
      let printread = false
      linesarray.forEach(function (line) {
        if (line.type === "print" && !printread) {
        printread = true
        let i = 0
        line.printcolumns.forEach(function (column) {
          column[1].forEach(function(value) {
            columnarrays[i].push(value)
          })
          i++
        })
        }
      })
      let varmap = []
      for (let row = 0; row < columnarrays.length; row++) {
        for (let col = 0; col < columnarrays[row].length; col++) {
        let name = columnarrays[row][col]
        if (name[0] !== "*") {
          varmap.push([name, [row, col]])
        }
        }
      }
      let placement = {}
      let colcount = 0, rowcount = 0
      for (let i = 0; i < varmap.length; i++) {
        let row = varmap[i][1][1]
        let col = varmap[i][1][0] + 1
        let name = varmap[i][0][0]
        colcount = Math.max(colcount, col)
        rowcount = Math.max(rowcount, row)
        placement[name] = [col, row]
      }
      placement['TIME'] = [0,0]
      varmap = scaletime(varmap)
      let text = ''
      let pagenumber = 1
      for(i=1;i<printcsv.length;i++) {
        if((i===1)||(i%18===0)) {
          text = addpagenumber(pagenumber, text)
          let results = varmatrix(placement, colcount, rowcount)
          text = appendlines(results, text)
          results = scalematrix(varmap, placement, colcount, rowcount)
          text = appendlines(results, text)
          pagenumber++
        }
        results = datamatrix(i, varmap, placement, colcount, rowcount)
        text = appendlines(results, text)
      }
      /**
       * @function datamatrix 
       * @description Adds variable values in the print matrix.
       * @param {array}  index - The row of data to print 
       * @param {array}  placement - position keys
       * @param {number} colcount - The column count.
       * @param {number} rowcount - The row count.
       * @returns {array} Row strings.
       */
      function datamatrix(index, varmap, placement, colcount, rowcount) {
        let textvalues = textmatrix(colcount, rowcount)
        textvalues[0][0] = printformat(varmap, 'TIME', DT*PRTPER*(i-1))
        for (let i = 0; i < printcsv[0].length; i++) {
          let varname = printcsv[0][i]
          let value = printcsv[index][i]
          let col = placement[varname][0]
          let row = placement[varname][1]
          textvalues[col][row] = printformat(varmap, varname, value)
        }
        return printtextmatrix(textvalues, colcount, rowcount)
      }
      /**
       * @function scalematrix 
       * @description Adds scale definitions in the print matrix.
       * @param {array}  varmap - maps keys to scale data
       * @param {array}  placement - position keys
       * @param {number} colcount - The column count.
       * @param {number} rowcount - The row count.
       * @returns {array} Row strings.
       */
      function scalematrix(varmap, placement, colcount, rowcount) {
        let textvalues = textmatrix(colcount, rowcount)
        let getexponent = (name) => {
        let entry = varmap.find(entry => entry[0][0] === name)
        let suffix 
        let exponent = entry[0][1]
        if (exponent >= 0) {
          suffix = `+${exponent.toString().padStart(2, '0')}`;
        } else {
          suffix  = `${exponent.toString().padStart(2, '0')}`;
        }
        return ('E' + suffix)
        }
        for (let name in placement) {
        let col = placement[name][0]
        let row = placement[name][1]
        textvalues[col][row] = getexponent(name)
        }
        return printtextmatrix(textvalues, colcount, rowcount)
      }
      /**
       * @function varmatrix
       * @description puts variable names in the print matrix.
       * @param {array} placement - position keys
       * @param {number} colcount - The column count.
       * @param {number} rowcount - The row count.
       * @returns {array} Row strings.
       */
      function varmatrix(placement, colcount, rowcount) {
        let textvalues = textmatrix(colcount, rowcount)
        for (let name in placement) {
        let col = placement[name][0]
        let row = placement[name][1]
        textvalues[col][row] = name
        }
        return printtextmatrix(textvalues, colcount, rowcount)
      }
      /**
       * @function addpagenumber
       */
      function addpagenumber(pagenumber, text) {
        text += '<p class="dynamoprint">'
        let runcard = false
        linesarray.forEach(function (line) {
          if (line.type === "run" && !runcard) {
          runcard = true
          text += "PAGE&nbsp;" + pagenumber + "&nbsp;".repeat(5)
          text += line.runcode
          text += "</p><br>"
          }
        })
        return text
      }
      /**
       * @function textmatrix
       * @description Returns a text matrix.
       * @returns {array} textvalues - A matrix with initialized empty strings.
       */
      function textmatrix(colcount, rowcount) {
        let textvalues = []
        for (let i = 0; i <= colcount; i++) {
        textvalues[i] = []
        for (let j = 0; j <= rowcount; j++) {
          textvalues[i][j] = ''
        }
        }
        return textvalues
      }
      const outputdiv = document.getElementById('dynamodisplay')
      outputdiv.innerHTML = text
      }
      /**
       * @function printtextmatrix
       * @description formats the textvalues array into row strings.
       * @param {array} textvalues - the 2d array of text values.
       * @param {number} colcount - the column count.
       * @param {number} rowcount - the row count.
       * @returns {array} row strings.
       */
      function printtextmatrix(textvalues, colcount, rowcount) {
        let results = []
        for (let i = 0; i <= rowcount; i++) {
        let resultrow = ''
        for (let j = 0; j <= colcount; j++) {
          let value = textvalues[j][i]
          if (j === 0) {
            resultrow += '&nbsp;&nbsp;' + value + Array(8 - value.length + 1).join('&nbsp;')
          } else if (value !== '') {
            resultrow += value + Array(8 - value.length + 1).join('&nbsp;')
          } else {
            resultrow += Array(8 + 1).join('&nbsp;')
          }
          resultrow += '&nbsp;'
        }
        results.push(resultrow)
        }
        let pattern = '- '
        let dashedline = pattern.repeat(43)
        results.push(dashedline)
        return results
      }
      /**
       * @function printformat
       * @description Formats numbers for print.
       * @param {array} varmap - Variable metadata.
       * @param {string} varname - The variable name.
       * @param {number} value - The number to be printed.
       * @return {string} Formatted string.
       */
      function printformat(varmap, varname, value) {
        for (let i = 0; i < varmap.length; i++) {
          let name = varmap[i][0][0]
          if (name === varname) {
            let exponent = varmap[i][0][1]
            let points = varmap[i][0][2]
            value *= Math.pow(10, -exponent)
            let formattedvalue = value.toFixed(points)
            if (formattedvalue.length > 6) {
              formattedvalue = formattedvalue.slice(0, 6)
            }
            return formattedvalue
          }
        }
        return null
      }
      /**
       * @function appendlinesappendlines
       * @description adds lines of print output.
       */
      function appendlines(results, text) {
        results.forEach(result => {
          text += `<p class="dynamoprint">${result}</p>`
        })
        return text
      }
      /**
       * @function scaletime
       */
      function scaletime(varmap) {
        let exponent = 0
        let points = 3
        let printstep = DT * PRTPER
        while(printstep < 1) {
          printstep *= 10
          exponent  -= 1
        }
        while(printstep > 10) {
          printstep /= 10
          exponent  += 1
        }
        let timeval = [["TIME", exponent, points],[0, 0]]
        varmap.unshift(timeval)
        return varmap
      }
    /**
     * @function graphresults
     * @description Using plot card specifications data is plotted.
     */
    function graphresults() {
      savemode = "plot"
      const colormap = []
      const colorscale = d3.scaleOrdinal(d3.schemeCategory10)
      const headers = plotcsv[0]
      headers.forEach((variable, index) => {
        const match = plotparameters.find(entry => entry[0] === variable)
        colormap.push([variable, colorscale(index), match[1].PG])
      })
      plotoutput(plotcsv, colormap)
      const existingsvg = document.querySelector('#dynamodisplay svg')
      const newsvg = showcolormap(colormap)
      existingsvg.parentNode.insertBefore(newsvg, existingsvg.nextSibling)
      /**
       * @function getrange
       * @description Returns a y axis range.
       * @param {int} id The range identifier. 
       */
      function getrange(id) {
        let range
        plotparameters.forEach(param => {
        if (id === param[1].PG) {
          range = [param[1].LL, param[1].UL]
        }
        })
        return range
      }
      /**
       * @function getrangevariable
       * @description Returns a y axis range.
       * @param {int} id The range identifier. 
       * @returns {array} Range variables.
       */
      function getrangevariable(id) {
        let rangevars = []
        plotparameters.forEach(param => {
        if (id === param[1].PG) {
          rangevars.push(param[0])
        }
        })
        return rangevars
      }
      /**
       * @function verticalaxiscount
       * @description Returns the number of vertical axis.
       * @returns {int} Count
       */
      function verticalaxiscount() {
        let count = 1
        plotparameters.forEach(param => {
        if (count < param[1].PG) {
          count = param[1].PG
        }
        })
        return count
      }
      /**
       * @function plotoutput
       * @description Plots data.
       * @param {array} data 
       * @param {array} colormap 
       */
      function plotoutput(data, colormap) {
        var timestep = PLTPER * DT
        var rangecount = verticalaxiscount()
        const ranges = []
        const plotvars = []
        for (let i = 1; i <= rangecount; i++) {
        ranges.push(getrange(i))
        plotvars.push(getrangevariable(i))
        }
        const headers = data[0]
        const rows = data.slice(1)
        const margin = { top: 10, right: 30, bottom: 30, left: 50 + (rangecount - 1) * 50 }
        const width = 800 - margin.left - margin.right
        const height = 400 - margin.top - margin.bottom
        const svg = d3.select('#dynamodisplay').html('').append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        const x = d3.scaleLinear().domain([0, rows.length * timestep]).range([0, width])
        svg.append('g').attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x))
        for (let i = 0; i < rangecount; i++) {
        let minval = Infinity, maxval = -Infinity
        headers.forEach((variable, index) => {
          if (plotvars[i].includes(variable)) {
            const columndata = rows.map(row => +row[index])
            minval = Math.min(minval, d3.min(columndata))
            maxval = Math.max(maxval, d3.max(columndata))
          }
        })
        if (ranges[i][0] !== '*') minval = +ranges[i][0]
        if (ranges[i][1] !== '*') maxval = +ranges[i][1]
        const y = d3.scaleLinear().domain([minval, maxval]).range([height, 0])
        const axisclass = 'axis' + (i + 1).toString().padStart(3, '0')
        const transformvalue = -50 * i
        svg.append('g').attr('class', axisclass).attr('transform', 'translate(' + transformvalue + ', 0)').call(d3.axisLeft(y).tickFormat(d3.format("d")))
        headers.forEach((variable, index) => {
          if (plotvars[i].includes(variable)) {
            const columndata = rows.map(row => +row[index])
            svg.append('path').datum(columndata).attr('fill', 'none').attr('stroke', colormap[index][1]).attr('stroke-width', 1.65).attr('d', d3.line().x((d, i) => x(i * timestep)).y(d => y(d)))
          }
        })
        }
      }
      /**
      * @function showcolormap
      * @description Constructs an svg.
      * @param {array} colormap - Variable names with colors.
      * @returns {svg} The svg variable colors banner.
      */
      function showcolormap(colormap) {
        const margin = 15
        const leftmargin = 22
        const widthswatch = 25
        const heightswatch = 10
        const lineheight = 20        
        const textoffsetY = 10
        const svgheight = lineheight + 2 * margin
        const url = "http://www.w3.org/2000/svg"
        let svg = document.createElementNS(url, "svg")
        svg.setAttribute("height", svgheight)
        let swatchGroup = document.createElementNS(url, "g")
        swatchGroup.setAttribute("id", "swatch-group")
        swatchGroup.setAttribute("transform", `translate(${margin + leftmargin}, ${margin})`)
        colormap.forEach((pair, index) => {
          const textoffsetX = 10 * pair[0].length
          const pairwidth = textoffsetX + widthswatch + margin + 40
          const svgwidth = (colormap.length * pairwidth) + leftmargin + margin
          svg.setAttribute("width", svgwidth)
          let g = document.createElementNS(url, "g")
          g.setAttribute("class", "swatch")
          g.setAttribute("transform", `translate(${index * pairwidth}, 0)`)
          let variablename = document.createElementNS(url, "text")
          variablename.setAttribute("x", "0")
          variablename.setAttribute("y", textoffsetY)
          variablename.textContent = pair[0]
          let swatch = document.createElementNS(url, "rect")
          swatch.setAttribute("x", textoffsetX)
          swatch.setAttribute("y", "0")
          swatch.setAttribute("width", widthswatch)
          swatch.setAttribute("height", heightswatch)
          swatch.setAttribute("fill", pair[1])
          let plotgroup = document.createElementNS(url, "text")
          plotgroup.setAttribute("x", textoffsetX + widthswatch)
          plotgroup.setAttribute("y", textoffsetY - 1)
          plotgroup.textContent = `(${pair[2]})`
          plotgroup.setAttribute("font-size", "80%")
          g.appendChild(variablename)
          g.appendChild(swatch)
          g.appendChild(plotgroup)
          swatchGroup.appendChild(g)
        })
        svg.appendChild(swatchGroup)
        return svg
      }
    }
    /**
     * @description fileload() Event listener.
     * Using a file picker a Dynamo card file is sent to a file reader.
     */
    document.getElementById('uploadfile').addEventListener('change', function () {
      let fileInput = document.getElementById('uploadfile')
      if (fileInput.files.length > 0) {
        let file = fileInput.files[0]
        readfile(file)
      }
    })
    /**
     * @function filebypath
     * @description A Dynamo card file is sent to a file reader from a path.
     * @param {string} filepath 
     */
    function filebypath(filepath) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', filepath, true);
      xhr.responseType = 'blob';
      xhr.onload = function() {
        if (xhr.status === 200) {
        readfile(xhr.response);
        }
      };
      xhr.send();
    }
    /**
     * @function fileload
     * @description Code for button.
     */
    function fileload() {
      document.getElementById('uploadfile').click()
    }
    /**
     * @function loaddefault
     * @description Code for button.
     */
    function loaddefault() {
      filecontents = defaultmodeltext.gettext().trim()
      loaddynamocards()
    }
    /**
     * @function readcarddeck
     * @description Reads Dynamo card deck
     */
    function readcarddeck() {
      linesarray = mergecontinuecards(linesarray)
      loadspeccard(linesarray)
      defineoutputarrays(linesarray)
      linesarray = sortcardsbytype(linesarray)
      modelcards = loadmodelcards(linesarray)
      printmodelcards(modelcards)
    }
    /**
     * @function findinitialvalues
     * @description The initial value of variables are found.
     */
    function findinitialvalues() {
      values = []
      delayarray = []
      let cardstack = deepcopy(modelcards)
      cardstack = sortbytype(cardstack)
      cardstack = saveinitialivalue(cardstack)
      cardstack = indexvariablearguments(cardstack)
      cardstack = sortedvariables(cardstack)
      values.push(["DT", DT])
      values = evaluatevariables(cardstack, values)
      valuesarray = values.concat(delayarray)
      delayarray = []
    }
    /**
     * @function processcards
     * @description processes modelcards in several steps to categorize and reorder
     * them based on properties and types. 
     */
    function processcards() {
      let lcards, acards, rcards
      delayindex = 1
      let cardstack = deepcopy(modelcards)
      cardstack = sortbytype(cardstack)
      cardstack = indexvariablearguments(cardstack)
      cardstack = sortedvariables(cardstack)
      cardstack = cardstack.filter(card => card.equationtype !== 'C')
      cardstack = cardstack.filter(card => card.equationtype !== 'N')
      lcards = cardstack.filter(card => card.equationtype === 'L')
      acards = cardstack.filter(card => card.equationtype === 'A')
      rcards = cardstack.filter(card => card.equationtype === 'R')
      cardstack = [...lcards, ...acards, ...rcards]
      cardstack = replacedelaycards(cardstack)
      cardstack = renumbercards(cardstack)
      runcards = cardstack
      printmodelcards(cardstack)
    }
    /**
     * @function evaluatemodel
     * @description The simulation is run.
     */
    function evaluatemodel() {
      TIME = 0
      printcsv = printcsv.slice(0, 1)
      plotcsv = plotcsv.slice(0, 1)
      loopcount = 0
      while (TIME <= LENGTH) {
        printplot()
        timestep()
        stepforward()
      }
      TIME = 0
    }
    /**
     * @description Dynamo core equations.
     */
    const functions = {
      eqn1L: function (VJ, DT, P, Q, F) {
        return (VJ + (DT) * ((F[0] * P) + (F[1] * Q)))
      },
      eqn52L: function (VJ, DT, P, Q, R, S, F) {
        return (VJ + (DT) * ((F[0] * P) + (F[1] * Q) + (F[2] * R) + (F[3] * S)))
      },
      eqn2L: function (VJ, DT, P, Q, R, S, T, U, F) {
        return (VJ + (DT) * ((F[0] * P) + (F[1] * Q) + (F[2] * R) + (F[3] * S) + (F[4] * T) + (F[5] * U)))
      },
      eqn3L: function (VJ, DT, Y, P, Q, F) {
        return (VJ + (DT) * (1 / (F[0] * Y)) * ((F[1] * P) + (F[2] * Q)))
      },
      eqn4L: function (VJ, DT, Y, P, Q, R, S, T, U, F) {
        return (VJ + (DT) * (1 / (F[0] * Y)) * ((F[1] * P) + (F[2] * Q) + (F[3] * R) + (F[4] * S) + (F[5] * T) + (F[6] * U)))
      },
      eqn5L: function (VJ, DT, Y, P, Q, Z, R, S, F) {
        return (VJ + (DT) * (1 / (F[0] * Y)) * ((F[1] * P) + (F[2] * Q) + (1 / (F[3] * Z)) * (F[4] * R) + (F[5] * S)))
      },
      eqn6: function (P, F) {
        return (F[0] * P)
      },
      eqn7: function (P, Q, F) {
        return (F[0] * P + F[1] * Q)
      },
      eqn8: function (P, Q, R, F) {
        return (F[0] * P + F[1] * Q + F[2] * R)
      },
      eqn9: function (P, Q, R, S, F) {
        return ((F[0] * P + F[1] * Q + F[2] * R + F[3] * S))
      },
      eqn10: function (P, Q, R, S, T, U, F) {
        return ((F[0] * P + F[1] * Q + F[2] * R + F[3] * S + F[4] * T + F[5] * U))
      },
      eqn11: function (P, Q, R, S, T, U, W, X, F) {
        return ((F[0] * P + F[1] * Q + F[2] * R + F[3] * S + F[4] * T + F[5] * U + F[6] * W + F[7] * X))
      },
      eqn12: function (P, Q, F) {
        return ((F[0] * P) * (F[1] * Q))
      },
      eqn13: function (P, Q, R, F) {
        return ((F[0] * P) * (F[1] * Q) * (F[2] * R))
      },
      eqn14: function (P, Q, R, F) {
        return ((F[0] * P) + ((F[1] * Q) * (F[2] * R)))
      },
      eqn15: function (P, Q, R, S, F) {
        return (((F[0] * P) * (F[1] * Q)) + ((F[2] * R) * (F[3] * S)))
      },
      eqn16: function (P, Q, R, S, T, U, W, X, F) {
        return (((F[0] * P) * (F[1] * Q)) + ((F[2] * R) * (F[3] * S)) + ((F[4] * T) * (F[5] * U)) + ((F[6] * W) * (F[7] * X)))
      },
      eqn17: function (P, Q, R, S, T, U, W, X, Y, F) {
        return (((F[0] * P) * (F[1] * Q) * (F[2] * R)) + ((F[3] * S) * (F[4] * T) * (F[5] * U)) + ((F[6] * W) * (F[7] * X) * (F[8] * Y)))
      },
      eqn18: function (P, Q, R, F) {
        return ((F[0] * P) * ((F[1] * Q) + (F[2] * R)))
      },
      eqn19: function (P, Q, R, S, T, F) {
        return ((F[0] * P) * ((F[1] * Q) + (F[2] * R) + (F[3] * S) + (F[4] * T)))
      },
      eqn20: function (P, Q, F) {
        return ((F[0] * P) / (F[1] * Q))
      },
      eqn44: function (P, Q, R, F) {
        return (((F[0] * P) * (F[1] * Q)) / (F[2] * R))
      },
      eqn42: function (P, Q, R, F) {
        return ((F[0] * P) / ((F[1] * Q) * (F[2] * R)))
      },
      eqn46: function (P, Q, R, S, T, U, F) {
        return (((F[0] * P) * (F[1] * Q) * (F[2] * R)) / ((F[3] * S) * (F[4] * T) * (F[5] * U)))
      },
      eqn21: function (Y, P, Q, F) {
        return ((1 / (F[0] * Y)) * ((F[1] * P) + (F[2] * Q)))
      },
      eqn24: function (Y, P, Q, R, S, T, U, F) {
        return ((1 / (F[0] * Y)) * ((F[1] * P) + (F[2] * Q) + (F[3] * R) + (F[4] * S) + (F[5] * T) + (F[6] * U)))
      },
      eqn22: function (Y, P, Q, R, S, F) {
        return ((1 / (F[0] * Y)) * (((F[1] * P) * (F[2] * Q)) + ((F[3] * R) * (F[4] * S))))
      },
      eqn23: function (Y, P, Q, Z, R, S, F) {
        return ((1 / (F[0] * Y)) * ((F[1] * P) + (F[2] * Q)) + (1 / (F[3] * Z)) * ((F[4] * R) + (F[5] * S)))
      },
      eqn27: function (P, Q, R, F) {
        return (((F[0] * P) / (F[1] * Q)) + (F[2] * R))
      },
      eqn40: function (P, Q, R, S, F) {
        return ((F[0] * P) + (1 / (F[1] * Q)) * ((F[2] * R) + (F[3] * S)))
      },
      eqn25: function (P, Q, R, S, T, U, W, X, F) {
        return ((F[0] * P) + (1 / (F[1] * Q)) * ((F[2] * R) + (F[3] * S) + (F[4] * T) + (F[5] * U) + (F[6] * W) + (F[7] * X)))
      },
      eqn48: function (P, Q, R, F) {
        return ((F[0] * P) / ((F[1] * Q) + (F[2] * R)))
      },
      eqn50: function (P, Q, R, S, F) {
        return (((F[0] * P) * (F[1] * Q)) / ((F[2] * R) + (F[3] * S)))
      },
      eqn26: function (P, Q, R, S, T, U, F) {
        return (((F[0] * P) + (F[1] * Q) + (F[2] * R)) / ((F[3] * S) + (F[4] * T) + (F[5] * U)))
      },
      eqn28: function (P, Q, F) {
        return ((F[0] * P) * Math.exp(F[1] * Q))
      },
      eqn29: function (P, Q, F) {
        return ((F[0] * P) * Math.log(F[1] * Q))
      },
      eqn30: function (P, Q, F) {
        return ((F[0] * P) * Math.sqrt(F[1] * Q))
      },
      eqn31: function (P, Q, R, F) {
        return ((F[0] * P) * Math.sin(2 * Math.PI * ((F[1] * Q) / (F[2] * R))))
      },
      eqn32: function (P, Q, R, F) {
        return ((F[0] * P) * Math.cos(2 * Math.PI * ((F[1] * Q) / (F[2] * R))))
      },
      eqn39: function (P, C, F) {
        P = F[0] * P
        delayarray.push([('*' + String(delayindex++).padStart(3, '0')), P])
        delayarray.push([('*' + String(delayindex++).padStart(3, '0')), P])
        delayarray.push([('*' + String(delayindex++).padStart(3, '0')), C / (3 * DT)])
        return (P)
      },
      eqn45: function (P, Q, F, I = 0) {
        if (TIME < Q) return (I)
        else return (F[0] * P)
      },
      eqn56: function (P, Q, F) {
        if ((F[0] * P) > (F[1] * Q)) return (F[0] * P)
        else return (F[1] * Q)
      },
      eqn54: function (P, Q, F) {
        if ((F[0] * P) < (F[1] * Q)) return (F[0] * P)
        else return (F[1] * Q)
      }
    }
    /**
     * @function extractvariable
     * @description Extracts a variable name from content starting at cardptr.
     * @param {string} content - The string holding the variable.
     * @param {number} cardptr - The position of the variable start.
     * @returns {string} The variable name.
     */
    function extractvariable(content, cardptr) {
      let variable = ''
      if (isLetter(content[cardptr]) || content[cardptr] === '*') {
        variable += content[cardptr]
        cardptr++
      } else {
        return extractvalue(content, cardptr)
      }
      while (cardptr < content.length && isallowedcharacter(content[cardptr])) {
        variable += content[cardptr]
        cardptr++
      }
      return variable
    }
    /**
     * @function extractvalue
     * @description Extracts a numeric value from a constant card.
     * @param {string} content - The string holding the number.
     * @param {number} cardptr - The position of the number start.
     * @returns {string} The variable name.
     */
    function extractvalue(content, cardptr) {
      let number = ''
      if (isnumbercharacter(content[cardptr])) {
        number += content[cardptr]
        cardptr++
      } else {
        return '' // The first character is not a number character, handle the error
      }
      while (cardptr < content.length && isnumbercharacter(content[cardptr])) {
        number += content[cardptr]
        cardptr++
      }
      return number
    }
    /**
     * @function isLetter
     * @description Checks if a character is a letter.
     * @param {char} ch - The character to check.
     * @returns {boolean} True if the character is a letter, false otherwise.
     */
    function isLetter(ch) {
      return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')
    }
    /**
     * @function isallowedcharacter
     * @description Checks if a character is alphanumeric.
     * @param {char} ch - The character to check.
     * @returns {boolean} True if the character is alphanumeric, false otherwise.
     */
    function isallowedcharacter(ch) {
      return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || ch === '.'
    }
    /**
     * @function isnumbercharacter
     * @description Checks if a character is part of a number.
     * @param {char} ch - The character to check.
     * @returns {boolean} True if the character is a number character.
     */
    function isnumbercharacter(ch) {
      return (ch >= '0' && ch <= '9') || ch === '.'
    }
    /**
     * @function isnumbercharacter
     * @description Checks if a string is a variable name.
     * @param {string} str - Text to check.
     * @returns {boolean} True if the string is a vvariable name.
     */
    function isvariablename(str) {
      if (str.length === 0) return false
      const firstChar = str.charAt(0)
      return (firstChar >= 'A' && firstChar <= 'Z') ||
        (firstChar >= 'a' && firstChar <= 'z') ||
        firstChar === '*'
    }

    loadtoolbar()

    var TIME
    var DT
    var LENGTH
    var PRTPER
    var PLTPER
    var linesarray
    var modelcards
    var runcards
    var delayarray
    var printcsv
    var plotcsv
    var savemode
    var plotparameters
    var valuesarray
    var valuesmap
    var loopcount
    var filecontents
    var delayindex

    return {
      addrightarrow: addarrowright,
      addleftarrow: addarrowleft,
      deletearrow: deletearrows,
      addpageupdown: addpagescroll,
      reload: function () {
        loadtoolbar()
      }
    }
  })()
}
