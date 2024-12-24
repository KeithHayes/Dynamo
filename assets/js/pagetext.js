const defaultmodeltext = (function() {
const page1text = `<div class="tp-hdr">
<span class="tp-title">DYNAMO</span>
<span class="tp-title">USER'S MANUAL</span>
<span class="tp-edition">Second Edition</span>
<span class="tp-author">ALEXANDER L. PUGH, III</span>
<span class="tp-source">MASSACHUSETTS INSTITUTE OF TECHNOLOGY 1963</span>
</div>`

const page2text = `<center class="tblcon-hdr1">CONTENTS</center>
<p class="tblcon-pagehdr">Page</p>
<div class="tblcon-line">
<span class="tblcon-title1">Introduction</span>
<span class="tblcon-spacing">..................................................................</span>
<span class="tblcon-page">1</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">I.1</span>
<span class="tblcon-title3">Brief History of DYNAMO</span>
<span class="tblcon-spacing">................................................</span>
<span class="tblcon-page">2</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">I.2</span>
<span class="tblcon-title3">Facts and Figures about DYNAMO</span>
<span class="tblcon-spacing">.........................................</span>
<span class="tblcon-page">2</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">I.3</span>
<span class="tblcon-title3">DYNAMO Checker for the IBM 1620 Computer</span>
<span class="tblcon-spacing">................................</span>
<span class="tblcon-page">3</span>
</div>
<div class="tblcon-line">&nbsp;</div>
<div class="tblcon-line">
<span class="tblcon-title4">1.</span>
<span class="tblcon-title5">Primer</span>
<span class="tblcon-spacing">.......................................................................</span>
<span class="tblcon-page">4</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">1.1</span>
<span class="tblcon-title3">Explanation of Time Notation and Variable Types</span>
<span class="tblcon-spacing">.......................</span>
<span class="tblcon-page">4</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Level</span>
<span class="tblcon-spacing">.................................................................</span>
<span class="tblcon-page">5</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Rate</span>
<span class="tblcon-spacing">..................................................................</span>
<span class="tblcon-page">5</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Auxiliary</span>
<span class="tblcon-spacing">.............................................................</span>
<span class="tblcon-page">5</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Order of Computation</span>
<span class="tblcon-spacing">...................................................</span>
<span class="tblcon-page">5</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">1.2</span>
<span class="tblcon-title3">The Situation to Be Modeled and the Model Equations</span>
<span class="tblcon-spacing">....................</span>
<span class="tblcon-page">5</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">1.3</span>
<span class="tblcon-title3">Translating the Model into DYNAMO Language</span>
<span class="tblcon-spacing">.............................</span>
<span class="tblcon-page">7</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">1.4</span>
<span class="tblcon-title3">Completing the Model</span>
<span class="tblcon-spacing">...................................................</span>
<span class="tblcon-page">9</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Initial Values</span>
<span class="tblcon-spacing">........................................................</span>
<span class="tblcon-page">9</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Input</span>
<span class="tblcon-spacing">.................................................................</span>
<span class="tblcon-page">10</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Constants</span>
<span class="tblcon-spacing">.............................................................</span>
<span class="tblcon-page">10</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Output</span>
<span class="tblcon-spacing">................................................................</span>
<span class="tblcon-page">11</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Run Details</span>
<span class="tblcon-spacing">...........................................................</span>
<span class="tblcon-page">14</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">1.5</span>
<span class="tblcon-title3">Card Punching</span>
<span class="tblcon-spacing">.........................................................</span>
<span class="tblcon-page">15</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">1.6</span>
<span class="tblcon-title3">Assembling a Run</span>
<span class="tblcon-spacing">......................................................</span>
<span class="tblcon-page">16</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Order of Cards</span>
<span class="tblcon-spacing">........................................................</span>
<span class="tblcon-page">16</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Reruns</span>
<span class="tblcon-spacing">...............................................................</span>
<span class="tblcon-page">16</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">1.7</span>
<span class="tblcon-title3">Error Examples</span>
<span class="tblcon-spacing">........................................................</span>
<span class="tblcon-page">17</span>
</div>
<div class="tblcon-line">&nbsp;</div>
<div class="tblcon-line">
<span class="tblcon-title4">2.</span>
<span class="tblcon-title5">Reference Manual</span>
<span class="tblcon-spacing">............................................................</span>
<span class="tblcon-page">20</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">2.1</span>
<span class="tblcon-title3">Introduction</span>
<span class="tblcon-spacing">..........................................................</span>
<span class="tblcon-page">20</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">2.2</span>
<span class="tblcon-title3">Equation Cards</span>
<span class="tblcon-spacing">........................................................</span>
<span class="tblcon-page">20</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Quantity Types</span>
<span class="tblcon-spacing">.......................................................</span>
<span class="tblcon-page">20</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Quantity Names</span>
<span class="tblcon-spacing">.......................................................</span>
<span class="tblcon-page">21</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Equation Forms</span>
<span class="tblcon-spacing">.......................................................</span>
<span class="tblcon-page">21</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Subscripts and Permissible Defining Quantities</span>
<span class="tblcon-spacing">.......................</span>
<span class="tblcon-page">23</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Initial Values</span>
<span class="tblcon-spacing">.......................................................</span>
<span class="tblcon-page">24</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Equation Card Punching</span>
<span class="tblcon-spacing">...............................................</span>
<span class="tblcon-page">25</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title7">Rule of the Final Space</span>
<span class="tblcon-spacing">.............................................</span>
<span class="tblcon-page">25</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title7">Continuation Cards</span>
<span class="tblcon-spacing">..................................................</span>
<span class="tblcon-page">25</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title7">Numerical Values</span>
<span class="tblcon-spacing">....................................................</span>
<span class="tblcon-page">26</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title7">Comments</span>
<span class="tblcon-spacing">............................................................</span>
<span class="tblcon-page">26</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Constant Cards</span>
<span class="tblcon-spacing">.......................................................</span>
<span class="tblcon-page">26</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title7">Tables and Initial Values for Boxcar Trains</span>
<span class="tblcon-spacing">.........................</span>
<span class="tblcon-page">27</span>
</div>
<center class="tblcon-hdr1">v</center>
<div class="dyna-blankline">&nbsp;</div>
`

const page3text = `<div class="tblcon-topline">
<span class="left-align">vi</span>
<span class="right-align">contents</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">2.3</span>
<span class="tblcon-title3">Direction Cards</span>
<span class="tblcon-spacing">.......................................................</span>
<span class="tblcon-page">27</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Identification Card</span>
<span class="tblcon-spacing">...................................................</span>
<span class="tblcon-page">27</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">RUN Card</span>
<span class="tblcon-spacing">..............................................................</span>
<span class="tblcon-page">28</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">SPEC Card</span>
<span class="tblcon-spacing">............................................................</span>
<span class="tblcon-page">28</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">PRINT Cards</span>
<span class="tblcon-spacing">..........................................................</span>
<span class="tblcon-page">29</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title7">Scaling of Quantities for Printing</span>
<span class="tblcon-spacing">..................................</span>
<span class="tblcon-page">30</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">PLOT Cards</span>
<span class="tblcon-spacing">...........................................................</span>
<span class="tblcon-page">30</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">NOTE Cards</span>
<span class="tblcon-spacing">...........................................................</span>
<span class="tblcon-page">31</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">NOISE Cards</span>
<span class="tblcon-spacing">..........................................................</span>
<span class="tblcon-page">31</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">2.4</span>
<span class="tblcon-title3">Order of Cards; Runs and Reruns</span>
<span class="tblcon-spacing">.......................................</span>
<span class="tblcon-page">32</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">2.5</span>
<span class="tblcon-title3">Boxcars and Boxcar Trains</span>
<span class="tblcon-spacing">.............................................</span>
<span class="tblcon-page">32</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">2.6</span>
<span class="tblcon-title3">Special Functions</span>
<span class="tblcon-spacing">.......................................................</span>
<span class="tblcon-page">34</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Common Functions</span>
<span class="tblcon-spacing">.......................................................</span>
<span class="tblcon-page">34</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Random Numbers</span>
<span class="tblcon-spacing">.........................................................</span>
<span class="tblcon-page">35</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Third-Order Delay</span>
<span class="tblcon-spacing">......................................................</span>
<span class="tblcon-page">36</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Pulse Source</span>
<span class="tblcon-spacing">.........................................................</span>
<span class="tblcon-page">36</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Step Function</span>
<span class="tblcon-spacing">........................................................</span>
<span class="tblcon-page">37</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Ramp Function</span>
<span class="tblcon-spacing">........................................................</span>
<span class="tblcon-page">37</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Sampler</span>
<span class="tblcon-spacing">..............................................................</span>
<span class="tblcon-page">37</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Maximum Function</span>
<span class="tblcon-spacing">.....................................................</span>
<span class="tblcon-page">38</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Minimum Function</span>
<span class="tblcon-spacing">.....................................................</span>
<span class="tblcon-page">38</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Clipping or Limiting Function</span>
<span class="tblcon-spacing">........................................</span>
<span class="tblcon-page">38</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Switch Function</span>
<span class="tblcon-spacing">......................................................</span>
<span class="tblcon-page">38</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Table Functions</span>
<span class="tblcon-spacing">......................................................</span>
<span class="tblcon-page">38</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Summing Functions</span>
<span class="tblcon-spacing">....................................................</span>
<span class="tblcon-page">40</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Treatment of Round-off in Comparisons with TIME</span>
<span class="tblcon-spacing">......................</span>
<span class="tblcon-page">41</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title6">Variable Boxcar-Shifting, Pulse, Sample, Step, and</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title8">Ramp Times</span>
<span class="tblcon-spacing">........................................................</span>
<span class="tblcon-page">41</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">2.7</span>
<span class="tblcon-title3">The Choice of DT</span>
<span class="tblcon-spacing">......................................................</span>
<span class="tblcon-page">42</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">2.8</span>
<span class="tblcon-title3">Estimating the Computer Time Required</span>
<span class="tblcon-spacing">.................................</span>
<span class="tblcon-page">43</span>
</div>
<div class="tblcon-line">&nbsp;</div>
<div class="tblcon-line">
<span class="tblcon-title4">3.</span>
<span class="tblcon-title5">How DYNAMO Works</span>
<span class="tblcon-spacing">............................................................</span>
<span class="tblcon-page">44</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">3.1</span>
<span class="tblcon-title3">Input Phase</span>
<span class="tblcon-spacing">...........................................................</span>
<span class="tblcon-page">44</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">3.2</span>
<span class="tblcon-title3">Generation Phase</span>
<span class="tblcon-spacing">......................................................</span>
<span class="tblcon-page">45</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">3.3</span>
<span class="tblcon-title3">Running Phase</span>
<span class="tblcon-spacing">.........................................................</span>
<span class="tblcon-page">48</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">3.4</span>
<span class="tblcon-title3">Printing Phase</span>
<span class="tblcon-spacing">........................................................</span>
<span class="tblcon-page">49</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">3.5</span>
<span class="tblcon-title3">Plotting Phase</span>
<span class="tblcon-spacing">........................................................</span>
<span class="tblcon-page">49</span>
</div>
<div class="tblcon-line">
<span class="tblcon-title2">3.6</span>
<span class="tblcon-title3">Rerun Phase</span>
<span class="tblcon-spacing">...........................................................</span>
<span class="tblcon-page">49</span>
</div>
<div class="tblcon-line2">
<span class="tblcon-title4">Appendix&nbsp;A&nbsp;&nbsp;Scaling&nbsp;Letters</span>
<span class="tblcon-spacing">.....................................................</span>
<span class="tblcon-page">50</span>
</div>
<div class="tblcon-line2">
<span class="tblcon-title4">Appendix&nbsp;B&nbsp;&nbsp;Equation&nbsp;Forms</span>
<span class="tblcon-spacing">......................................................</span>
<span class="tblcon-page">51</span>
</div>
<div class="tblcon-line2">
<span class="tblcon-title4">Index</span>
<span class="tblcon-spacing">...........................................................................</span>
<span class="tblcon-page">60</span>
</div>
<div class="dyna-blankline">&nbsp;</div>
`

const page4text = `<center class="dyna-hdr1">INTRODUCTION</center>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p1">DYNAMO is a computer program for translating mathematical models from an easy-to-understand notation into tabulated and plotted results. The models may be of any dynamic feedback system such as arises in business, economics, or engineering. The principal limitation on the model is that it be a continuous representation of the real world. As DYNAMO does not recognize individual items or events, models of job shops and the like can not be tested.†</p>
<p class="dyna-p1">(The question occasionally arises, "What does DYNAMO look like?" This question particularly bothers some people because neither the input model nor the results of the model are DYNAMO. Unfortunately, the answer is the same as the answer to "What does a procedure look like?" A program is a procedure for converting some sort of data into some desired results. As such, it can be expressed in any of several languages, and its appearance is that of the language and the medium on which it is recorded: a printed page, a deck of punched cards, or a magnetic tape.)</p>
<p class="dyna-p1">A model written in DYNAMO consists of a number of algebraic relationships that relate the variables one to another.‡ The notation is very similar to that of a general-purpose scientific compiler (for example, FORTRAN). The advantages of using DYNAMO rather than a general-purpose compiler are</p>
<ul class="dyna-list"><li>The DYNAMO language is easily understood. The time notation greatly aids one in comprehending the order of computation.</li><li>DYNAMO language is easy to learn. The lack of unnecessary flexibility means that there is less to study, and what must be learned can be readily mastered in the context of its eventual use.</li><li>Ingenuity, which is such an important part in the use of most computer languages, is not involved in most DYNAMO formulations. A corollary is that models formulated by different users of the same situation will be quite similar and easily compared.</li><li>Unlike most compilers that have both a "source" and "object" language, DYNAMO has but one. DYNAMO's very short compilation time means that there is little value in saving the machine language code from one run to the next. DYNAMO's output includes graphic results, saving the user the time and effort that he would otherwise spend plotting his data. Furthermore, all forms of the output can be specified easily, even to the point of not having to supply the scale factors for the tabulated results or the scales for the plotted results.</li></ul>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote">† Persons familiar with both digital and analogue computers will find that DYNAMO in many ways behaves more like an analogue than a digital computer.</p>
<p class="dyna-footnote">‡ Mathematicians will recognize these relationships as constituting a set of zero- and first-order difference equations.</p>
<center class="dyna-footer1">1</center>
<div class="dyna-blankline">&nbsp;</div>
`

const page5text = `<div class="dyna-topline">
<span class="left-align">2</span>
<span class="right-align">introduction</span>
</div>
<ul class="dyna-list"><li>DYNAMO does not require that the equations be in the order necessary for computation.  If the order is wrong (as is generally the case), DYNAMO will correct it.</li><li>DYNAMO will create some of the required initial conditions. While the user must decide upon the desired initial state for the model, he can leave many
of the trivial relationships to DYNAMO.</li><li>Finally, DYNAMO's extensive error checking simplifies the problem of developing a meaningful model. DYNAMO checks for practically every logical inconsistency.  Furthermore, the error comments are designed to reduce the problem of understanding and correcting the error.</li></ul>
<p class="dyna-p1">This manual is divided into three chapters. Chapter l is a primer, Chapter 2 is a reference manual, and Chapter 3 is a nontechnical description of the internal structure of DYNAMO.</p>
<p class="dyna-p1">Chapter 1 begins with a brief explanationt of the time notation and definitions of the three principal variable types: levels, auxiliaries, and rates. Next, it presents a model expressed in this time notation and shows what modifications are necessary to make the model acceptable to DYNAMO. It discusses punching the appropriate cards and preparing them to be run on the computer. Finally, it discusses some of the errors that might have been made in this model and the error comments that DYNAMO would have produced.</p>
<p class="dyna-p1">Chapter 2 provides the rules of DYNAMO in a reference format. The user should read Chapter 2 once to become familiar with the details of DYNAMO not mentioned in Chapter 1. After that he will call on Chapter 2 to answer quite specific questions. An index to Chapter 2 is provided for this purpose.</p>
<p class="dyna-p1">For those interested in the internal structure of DYNAMO, Chapter 3 provides a brief, nontechnical description of how a model is translated into machine language and ultimately into tabulated and plotted results.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">I.1&nbsp;&nbsp;<span class="dyna-underline">Brief History of DYNAMO</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The history of DYNAMO begins with a program called SIMPLE (Simulation of Industrial Management Problems with Lots of Equations), which was written by Richard K. Bennett in the spring of 1958 for the IBM 704 Computer.  SIMPLE contained most of the basic features of DYNAMO, including the plotting routine (written by Edward B. Roberts), but the model specifications had to be stated in a rather primitive form, and very few checks were performed on these specifications. These shortcomings were corrected by DYNAMO (DYNAmic MOdels), which was written by Dr. Phyllis Fox (Mrs. George Sternlieb) and Alexander L. Pugh, III, and was completed in the spring of 1959. Mr. Roberts modified and improved the plotting routine to be a part of DYNAMO, and Mrs. Grace Duren and David J. Howard assisted with other phases of the program.</p>
<p class="dyna-p1">The program was improved the following summer by the same group of people and called DYNAMO II. Since then there have been a number of improvements made by Mr. Pugh, including the conversion of the program from the IBM 704</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup> †</sup> Further information can be found in Industrial Dynamics by Jay W. Forrester, The M.I.T. Press, Cambridge, Mass., 1961.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page6text = `<div class="dyna-topline">
<span class="left-align">DYNAMO checker for the IBM 1620 computer</span>
<span class="right-align">3</span>
</div>
<p class="dyna-p1">Computer to the IBM 709 and 7090 Computers. As none of these changes was a major change, the series of names DYNAMO III, DYNAMO IV, etc., was dropped in favor of the older name, DYNAMO.</p>
<p class="dyna-p1">The financial support for all of these programs was provided by the Ford Foundation as a part of its support of the research in Industrial Dynamics. Computer time was made available by the M.I.T. Computation Center. A part of the latest modification was supported by a direct grant of computer time by the Interna- tional Business Machines Corporation.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">I.2&nbsp;&nbsp;<span class="dyna-underline">Facts and Figures about DYNAMO</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">DYNAMO consists of approximately 10,000 instructions written in machine language. The present version required 6 man-years of effort (including the work that went into SIMPLE).</p>
<p class="dyna-p1">The largest model that DYNAMO can handle is about 1400 equations (not counting initial-value equations).</p>
<p class="dyna-p1">It will operate on any IBM 709 or 7090 Computer with at least one data channel and three tape drives. It does not require data-channel traps. The earlier 704 version is still available, although no effort is being made to keep that version current.</p>
<p class="dyna-p1">The 709-90 version of DYNAMO is available from SHARE Distribution Agency, IBM Corporation, 112 East Post Road, White Plains, New York.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">I.3&nbsp;&nbsp;<span class="dyna-underline">DYNAMO Checker for the IBM 1620 Computer</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">A program that checks for most of the common errors in DYNAMO models has been written for the IBM 1620 Computer by two M.I.T. students, Henry V. Lett, Jr., and Douglas W. Gaidry. When a 1620 computer is more accessible than the 7090, the "DYNAMO Checker" speeds the process of eliminating mistakes from a model. The checker was originally written for a machine with 60,000 digits of memory, a card read-punch unit, and the indirect addressing feature, but has since been modified for 1620's with less memory.</p>
<div class="dyna-blankline">&nbsp;</div>
`
const page7text = `<center class="dyna-hdr2">Chapter 1</center>
<center class="dyna-hdr3">PRIMER</center>
<p class="dyna-p1">This chapter is divided into seven sections. The first explains the time notation and the variable types in DYNAMO. The second describes the model that will be used as a vehicle to present DYNAMO. The third translates that model to the DYNAMO language. The fourth section adds some necessary details such as initial values and the specification of the desired results. The fifth discusses punching the cards for the model. The sixth explains the order of the cards and the method for rerunning a model. The seventh discusses various types of errors and the error comments DYNAMO makes.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">1.1&nbsp;&nbsp;<span class="dyna-underline">Explanation of Time Notation and Variable Types</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The time notation and the types of variables are discussed in detail in Chapter 7 of <span class="dyna-underline">Industrial Dynamics</span><sup>†</sup> but will be described briefly here.</p>
<p class="dyna-p1">The basis for the time notation is the procedure by which the computer calculates the results, which is to move through TIME in discrete steps and calculate all the variables at each step. Figure 1-1 shows the procedure graphically.</p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="svg-fullwidth">
<svg width="600" height="150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="leftarrow" viewBox="0 0 10 10" refX="3" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 5 L 10 0 L 10 10 z" class="arrowhead" /></marker>
    <marker id="rightarrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 10 5 L 0 0 L 0 10 z" class="arrowhead" /></marker>
  </defs>
  <style>
    .line { stroke: #523a28; stroke-width: 1.5; }
    .arrowhead { fill: #523a28; }
    .label { fill: #523a28 text-anchor: middle; alignment-baseline: middle; font-size: 12px; }
  </style>
  <line x1="175" y1="94" x2="505" y2="94" class="line" marker-end="url(#rightarrow)" />
  <line x1="197" y1="19" x2="197" y2="109" class="line" />
  <line x1="300" y1="19" x2="300" y2="109" class="line" />
  <line x1="403" y1="19" x2="403" y2="109" class="line" />
  <line x1="202" y1="60" x2="237" y2="60" class="line" marker-start="url(#leftarrow)" />
  <line x1="259" y1="60" x2="295" y2="60" class="line" marker-end="url(#rightarrow)" />
  <line x1="304" y1="60" x2="340" y2="60" class="line" marker-start="url(#leftarrow)" />
  <line x1="360" y1="60" x2="398" y2="60" class="line" marker-end="url(#rightarrow)" />
  <text x="240" y="65" class="label">JK</text>
  <text x="344" y="65" class="label">KL</text>
  <text x="221" y="80" class="label">interval</text>
  <text x="324" y="80" class="label">interval</text>
  <text x="193" y="121" class="label">J</text>
  <text x="297" y="121" class="label">K</text>
  <text x="399" y="121" class="label">L</text>
  <text x="273" y="135" class="label">
    (Present
    <tspan x="287" dy="12">TIME)</tspan>
  </text>
  <text x="477" y="110" class="label">TIME</text>
</svg>
</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab26">Figure 1-1 Time Notation.</span>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The TIME for which the calculations are currently being made is called TIME K. The previous TIME for which calculations were made is called J, and the next instant for which calculations will be made is L. The intervals between these times are called JK and KL. The length of these intervals is called DT.</p>
<p class="dyna-p1">The names of instants and the intervals are used to specify when a quantity is calculated and when the quantities used in the calculation were previously calculated. Once all the variables have been calculated for the instant K and the interval KL, the computer moves forward one time step, and the values that were associated with TIME K are now related to TIME J.</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> Forrester, Jay W., Industrial Dynamics, The M.I.T. Press, Cambridge, Mass., 1961.</p>
<center class="dyna-footer1">4</center>
<div class="dyna-blankline">&nbsp;</div>
`

const page8text = `<div class="dyna-topline">
<span class="left-align">situation to be modeled and model equations</span>
<span class="right-align">5</span>
</div>
<p class="dyna-p3">This notation system was chosen in preference to one derived from differential equations because many users unfamiliar with higher mathematics will be able to understand and to use this step-by-step notation. (The user is cautioned against thinking of his model as being discrete because of the discrete nature of the notation system or the procedure of the computer.)</p>
<p class="dyna-p2">There are three principal types of variables in DYNAMO: levels, rates, and auxiliaries.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Level</span></p>
<p class="dyna-p1">A level, which is calculated at TIME K, is a quantity that depends upon its value at TIME J and on other quantities at that TIME or in the JK interval. Inventory is an example in that the inventory today is equal to the inventory at an earlier time plus what has been received minus what has been shipped during the interim.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Rate</span></p>
<p class="dyna-p1">The decisions in business and economic models are rates. Rates are the flows of tangible things from one level to the next. They are computed at TIME K for the interval KL from levels and auxiliaries at TIME K and occasionally from rates in the JK interval.</p>
<p class="dyna-p1">There is some confusion about rates in that all quantities with the dimension of something per unit time are not necessarily rates. In particular, averaged or smoothed rates, which are measured in something per unit time, are levels.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Auxiliary</span></p>
<p class="dyna-p1">Auxiliaries are variables that are introduced to simplify the algebraic complexity of rate equations. They generally have some physical meaning and consequently simplify the understanding of the model. They are computed at TIME K from levels and other auxiliaries at the same time and occasionally from rates in the JK interval. By their nature they can be eliminated by substitution into the rate equations.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Order of Computation</span></p>
<p class="dyna-p1">The order of computation at TIME K is first levels, which are based on quantities from TIME J and the JK interval, next auxiliaries, which are based on levels and auxiliaries computed earlier at TIME K and on rates JK, and finally rates, which are based on levels and auxiliaries from K and other rates from JK.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">1.2&nbsp;&nbsp;<span class="dyna-underline">The Situation to Be Modeled and the Model Equations</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">As an example, we shall model a retail store. This model will be similar to the retail sector of the production distribution system described in Chapter 15 of <span class="dyna-underline">Industrial Dynamics.</span></p>
<p class="dyna-p1">The retail store receives orders for goods. These orders reside in a "pool" of unfilled orders until they are filled from inventory. The shipments are proportional to the number of unfilled orders, provided there is sufficient inventory. The store orders to replace the items sold and to correct inventory to the "desired" level. The desired level corresponds to a number of weeks of averaged sales. The goods that the store orders arrive after a delay.</p>
<p class="dyna-p1">We shall use the same variable names as are used in Chapter 15 of <span class="dyna-underline">Industrial</span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page9text = `<div class="dyna-topline">
<span class="left-align">6</span>
<span class="right-align">primer</span>
</div>
<p class="dyna-p2"><span class="dyna-underline">Dynamics.</span> The inventory at time K is equal to the inventory at time J plus what was received during the interval JK minus what was shipped during the interval JK. Thus we have the level equation</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab11">IAR.K = IAR.J + (DT)(SRR.JK - SSR.JK)</span><span class="rightside">1-1, L</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">IAR</span><span class="dyna-tab4">Inventory Actual at Retail (goods)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">DT</span><span class="dyna-tab5">Delta Time (weeks)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">SRR</span><span class="dyna-tab4">Shipments Received at Retail (goods/week)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">SSR</span><span class="dyna-tab4">Shipments Sent from Retail (goods/week)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Similarly, the unfilled orders at time K are equal to the unfilled orders at time J plus new orders received during the interval JK minus shipments sent during the interval JK. This is a similar level equation:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab11">UOR.K = UOR.J + (DT)(RRR.JK - SSR.JK)</span><span class="rightside">1-2, L</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">UOR</span><span class="dyna-tab4">Unfilled Orders at Retail (goods)</p>
<p class="dyna-p2"><span class="dyna-tab19">RRR</span><span class="dyna-tab4">Requisitions Received at Retail (goods/week)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">SSR</span><span class="dyna-tab4">Shipments Sent from Retail (goods/week)</span></p>
<p class="dyna-p1">The rate equation for shipments from retail is</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">SSR.KL = UOR.K/DFR</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">provided that there is sufficient inventory. The constant of proportionality is 1/DFR. If (SSR.KL) (DT) exceeds IAR.K, we shall ship more from inventory than at present exists in the inventory. Consequently, we want to ship the smaller of UOR.K/DFR and IAR.K/DT, or</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab11">SSR.KL = MIN(UOR.K/DFR, IAR.K/DT)</span><span class="rightside">1-3, R</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">SSR</span><span class="dyna-tab4">Shipments Sent from Retail (goods/week)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">UOR</span><span class="dyna-tab4">Unfilled Orders at Retail (goods)</p>
<p class="dyna-p2"><span class="dyna-tab19">DFR</span><span class="dyna-tab4">Delay in Filling orders at Retail (weeks)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">IAR</span><span class="dyna-tab4">Inventory Actual at Retail (goods)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">where MIN indicates that the quantity on the left of the equality sign will have the value of the minimum of the two terms in the parentheses.</p>
<p class="dyna-p2">The store places orders to replace the items sold and to correct the inventory to the desired level. Therefore, the rate equation for the orders will contain two terms, the goods that have just been sold and the correction to adjust the actual inventory to the desired level:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab11">PSR.KL = RRR.JK + (1/DIR)(IDR.K - IAR.K)</span><span class="rightside">1-4, R</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">PSR</span><span class="dyna-tab4">Purchase orders Sent from Retail (goods/week)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">RRR</span><span class="dyna-tab4">Requisitions Received at Retail (goods/week)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">DIR</span><span class="dyna-tab4">Delay in adjusting Inventory at Retail (weeks)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">IDR</span><span class="dyna-tab4">Inventory Desired at Retail (goods)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">IAR</span><span class="dyna-tab4">Inventory Actual at Retail (goods)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">The fraction 1/DIR is that fraction of the difference between ideal and actual inventory that is ordered each week.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page10text = `<div class="dyna-topline">
<span class="left-align">translating the model into DYNAMO language</span>
<span class="right-align">7</span>
</div>
<p class="dyna-p2">The desired inventory is a number of weeks of averaged or smoothed sales. This implies the auxiliary equation</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab11">IDR.K = (AIR)(RSR.K)</span><span class="rightside">1-5, A</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">IDR</span><span class="dyna-tab4">Inventory Desired at Retail (goods)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">AIR</span><span class="dyna-tab4">constant for Inventory at Retail (weeks)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">RSR</span><span class="dyna-tab4">Requisitions Smoothed at Retail (goods/week)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">If we average orders received by exponential smoothing, <sup†</sup> we have the level equation</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab11">RSR.K = RSR.J + (DT/DRR)(RRR.JK - RSR.J)</span><span class="rightside">1-6, L</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">RSR</span><span class="dyna-tab4">Requisitions Smoothed at Retail (goods/week)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">RRR</span><span class="dyna-tab4">Requisitions Received at Retail (goods/week)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">DRR</span><span class="dyna-tab4">Delay in smoothing Requisitions at Retail (weeks)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The goods that the store orders arrive after a delay. As delays of rates occur so frequently in models of this sort, DYNAMO is equipped to create a delay from a simple specification. All that is necessary is to indicate what variable is to be delayed and how long the delay is:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab11">SRR.KL = DELAY(PSR.JK, DTR)</span><span class="rightside">1-7, R</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">SRR</span><span class="dyna-tab4">Shipments Received at Retail (goods/week)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">PSR</span><span class="dyna-tab4">Purchases Sent from Retail (goods/week)</span></p>
<p class="dyna-p2"><span class="dyna-tab19">DTR</span><span class="dyna-tab4">Delay in Transit at Retail (weeks)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">1.3&nbsp;&nbsp;<span class="dyna-underline">Translating the Model into DYNAMO Language</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><p class="dyna-p1">DYNAMO cannot accept the equations in exactly the form given in Equations 1-1 through 1-7. This section will complete the equations, and the next will add the necessary details so that the model can be run on the computer.</p>
<p class="dyna-p1">The variable and constant names are already satisfactory for DYNAMO. DYNAMO permits the use of up to and including five upper-case letters, for example, X, INV, ABCDE. After the first letter, a number may be substituted for a letter if desired. For example, A3BC is permitted but not 3ABC.</p>
<p class="dyna-p1">In addition to the equation for each variable, DYNAMO requires the variable type and the equation form number. The variable type was discussed with each equation. The equation form number is required because DYNAMO is not able to translate any arbitrary order of variables and algebraic symbols into machine language. Rather, it can translate only those types of equations shown in Appendix B. In fact, the equation must have the exact form shown under "Exact Punching Format" in Appendix B. No algebraic symbols may be interchanged. No parentheses may be added or forgotten. On the other hand, there is some flexibility in the sign of a variable. We shall discuss this in the context of Equation Form 1, which incidentally is the proper equation form for IAR and UOR.</p>
<p class="dyna-p1">The exact punching format for Equation Form 1 as given in Appendix B is</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">1L</span><span class="dyna-tab4">V.K=V.J+(DT)(±P±Q)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> Exponential smoothing is discussed in Appendix E of <span class="dyna-underline">Industrial Dynamics.</span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page11text = `<div class="dyna-topline">
<span class="left-align">8</span>
<span class="right-align">primer</span>
</div>
<p class="dyna-p3">The initial number 1 is the equation form number. The letter L indicates that this equation form may be used to define only levels. The letter V stands for the variable being defined. The letters P and Q stand for the two variables that when summed and multiplied by DT will be added to V.J to form V.K.  The quantities P and Q are not restricted to being variables; they might also be constants (either the name of a constant or an actual numerical value). The ± before P and Q indicates that either sign may be used. Following a left parenthesis, slash, <sup>†</sup> equality sign, or comma, the plus sign may be dropped. Hence the equation for inventory may be written either</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">1L</span><span class="dyna-tab4">IAR.K=IAR.J+(DT)(+SRR.JK-SSR.JK)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">or</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">1L</span><span class="dyna-tab4">IAR.K=IAR.J+(DT)(SRR.JK-SSR.JK)</span><span class="rightside">1-8</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The equation for UOR is similar:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">1L</span><span class="dyna-tab4">UOR.K=UOR.J+(DT)(RRR.JK-SSR.JK)</span><span class="rightside">1-9</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Note that most of the equation numbers in Appendix B are not followed by any letter and that V has no time subscript. These equation forms may be used to define auxiliaries, rates, or three variable types that have not been discussed yet: supplementaries, initial values, or computed constants. If these forms are used, the equation type must be followed by the letter corresponding to the variable type of the quantity being defined, and all the variables in the equation must have the proper subscripts.</p>
<p class="dyna-p1">Searching through Appendix B for the equation type for SSR, we find no such equation type. But there is one that reads</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">54</span><span class="dyna-tab4">V=MIN(±P,±Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">If we define two new auxiliary variables and set one equal to IAR.K/DT and the other equal to UOR.K/DFR, we can substitute them for P and Q. (The computation of complicated terms for other equations is one of the common roles of auxiliaries.) If we designate the largest flow that will just keep the inventory from going negative as the Negative Inventory rate at Retail (NIR) and designate the goods we are trying to ship provided there is sufficient inventory as Shipments Tried at Retail (STR), we have</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">20A</span><span class="dyna-tab5">NIR.K=IAR.K/DT</span><span class="rightside">1-10</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">20A</span><span class="dyna-tab5">STR.K=UOR.K/DFR</span><span class="rightside">1-11</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">54R</span><span class="dyna-tab5">SSR.KL=MIN(STR.K,NIR.K)</span><span class="rightside">1-12</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The equations for PSR and IDR raise no new points:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">40R</span><span class="dyna-tab5">PSR.KL=RRR.JK+(1/DIR)(IDR.K-IAR.K)</span><span class="rightside">1-13</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">12A</span><span class="dyna-tab5">IDR.K=(AIR)(RSR.K)</span><span class="rightside">1-14</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">On the other hand, there is no equation form that exactly matches the equation for RSR.</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> Or solidus.</p>
<div class="dyna-blankline">&nbsp;</div>
`
const page12text = `<div class="dyna-topline">
<span class="left-align">completing the model</span>
<span class="right-align">9</span>
</div>
<p class="dyna-p2"><span class="dyna-tab19">V.K=V.J+(DT/±Y)(±P±Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">just does not exist in Appendix B, although there is</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">3L</span><span class="dyna-tab5">V.K=V.J+(DT)(1/±Y)(±P±Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">which is algebraically equivalent. Therefore, the equation for RSR must be written</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">3L</span><span class="dyna-tab5">RSR.K=RSR.J+(DT)(1/DRR)(RRR.JK-RSR.J)</span><span class="rightside">1-15</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Again, there is no equation form that exactly matches the equation for SRR, although</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">39R</span><span class="dyna-tab5">V.KL=DELAY3(±P,C)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">comes very close. (In Equation Form 39, C indicates that a constant must be used for the length of the delay.) Equation Form 39 is a "third-order" delay, which is described in detail in Chapter 9 and Appendix H of <span class="dyna-underline">Industrial Dynamics</span>. The equations for it are listed on page 36 of this manual. Accepting the third- order delay as a satisfactory delay for SRR, we have</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">39R</span><span class="dyna-tab5">SRR.KL=DELAY3(PSR.JK,DTR)</span><span class="rightside">1-16</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">1.4&nbsp;&nbsp;<span class="dyna-underline">Completing the Model</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Though all the model equations are written, the model is not complete. There are five more problems to be taken care of before it can be run:</p>
<ul class="dyna-list"><li>We must specify the initial values.</li><li>We must provide an input.</li><li>We must assign values to our constants.</li><li>We must specify what variables are to be printed or plotted.</li><li>We must identify our model, and specify the desired length of run.</li></ul>
<p class="dyna-p1"><span class="dyna-underline">Initial Values</span></p>
<p class="dyna-p1">There is no place where we can begin the calculations without requiring the values of some variables from an earlier time. Starting with the auxiliaries<sup> †</sup> at TIME = 0 reduces the number of values required to a minimum, but still "initial values" must be provided for certain variable types. These initial values are the values the variables would have had if the model had been running prior to TIME = 0.</p>
<p class="dyna-p1">DYNAMO is able to determine the initial value of most auxiliaries and rates that require one, but the user must provide values for all levels. (A discussion of the problems that DYNAMO might encounter trying to assign initial values to auxiliaries and rates will be postponed to Chapter 2.)</p>
<p class="dyna-p1">At this point it is necessary to decide what condition in the model we wish our initial values to represent. One good choice is to start the model in "steady state," that is, to assume that the input has been constant for some time, all transients have died out, and everything is in balance.</p>
<p class="dyna-p1">If the incoming orders in our example have been constant for some time, then</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> The sequence of computations is given in Section 3.3 and Chapter 7 of <span class="dyna-underline">Industrial Dynamics.</span></p>
<div class="dyna-blankline">&nbsp;</div>
`
const page13text = `<div class="dyna-topline">
<span class="left-align">10</span>
<span class="right-align">primer</span>
</div>
<p class="dyna-p1">we should expect retail shipments, orders that the retail store generates, and shipments to the retail store all to have the same value as the incoming orders. The problem now is to choose our levels so that these rates will be equal. Let us assume that RRR has some initial value. (If the rate RRR requires an initial value, DYNAMO will compute one.) We shall assume that the inventory is sufficient so that SSR = UOR/DFR. If SSR is to equal RRR, then UOR must equal (DFR) (RRR), and we have the initial value for one of our levels:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">12N</span><span class="dyna-tab5">UOR=(DFR)(RRR)</span><span class="rightside">1-17</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Again we must explain DYNAMO conventions. The equation type is N for iNitial value. No time subscripts are used on either side of the equation.</p>
<p class="dyna-p1">The initial value for RSR is quite simple. If RRR has been constant for a long time, then the smoothed value of RRR would be equal to it:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">6N</span><span class="dyna-tab5">RSR=RRR</span><span class="rightside">1-18</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">If PSR = RRR, then IAR = IDR:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">6N</span><span class="dyna-tab5">IAR=IDR</span><span class="rightside">1-19</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Input</span></p>
<p class="dyna-p1">As it is not possible to change a model or to add data during a run, the input must be planned at the time the model is being constructed. There is a wide range of functions that might be used for the input. Their significance is dis- cussed in Chapter 12 of <span class="dyna-underline">Industrial Dynamics.</span> We shall try a step. In order to determine whether or not our initial values actually started the model in steady state, we shall delay the step until the 5th week:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">7R</span><span class="dyna-tab5">RRR.KL=RRI+RCR.K</span><span class="rightside">1-20</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2 flex-container"><span class="dyna-tab19">45A</span><span class="dyna-tab4">RCR.K-STEP(STH,5)</span><span class="rightside">1-21</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">where STH is the height of the step.</p>
<p class="dyna-p1">Since this is the first time we have used a numerical value in an equation, it deserves comment. Either a numerical value or a literal constant (for example, STH) may be used on the right side of any equation. The use of literal constants has several advantages. If we decide to change a constant that appears in several places (for instance, DFR appears in both the equation for STR and the initial-value equation for UOR), only one change is necessary to change it throughout the model. There is no chance of forgetting to change an initial condition that also depends on this constant. Furthermore, literal constants are the only ones that can be changed in reruns, as will be seen shortly.</p>
<p class="dyna-p1">When a constant appears only once in a model and there is no desire ever to change it, using a numerical value is slightly simpler.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Constants</span></p>
<p class="dyna-p1">The constants are very easy to specify. For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab6">AIR=8</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">The letter C on the left indicates that a constant follows. Thus we have set the retail store's desired inventory at 8 weeks of smoothed sales. We shall not try to</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page14text = `<div class="dyna-topline">
<span class="left-align">completing the model</span>
<span class="right-align">11</span>
</div>
<p class="dyna-p2">justify the realism of our choice of constants; that is not the purpose of this primer. We shall choose the other constants as follows:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab6">DFR=1</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab6">DIR=4</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab6">DRR=8</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab6">DTR=2</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab6">RRI=1000</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab6">STH=100</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Output</span></p>
<p class="dyna-p1">A sample of the first page of tabular results that DYNAMO can generate is shown in Figure 1-2. Incidentally, these are the tabular results for the model we have been discussing above. On the first two lines are the names of the variables whose values are tabulated below. Immediately beneath the names are the scale factors for the results that follow. The printed results must be multiplied by the appropriate scale factor to get the actual value of the results. The scale factors are expressed in powers of 10. The entry E+03 means the tabu- lated results should be multiplied by 10<sup>+3</sup>, or 1000, to get the actual value of the results. In the case in Figure 1-2, the scale factors are very simple because E+00 indicates that the tabulated results should be multiplied by 10<sup>0</sup> or 1. On later pages of the tabulated results the names are repeated, but not the scaling factors.</p>
<p class="dyna-p1">To obtain such a tabulation, it is necessary to specify only the names of the variable and the column in which it is to be printed. As an example, the card that yielded Figure 1-2 was</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">PRINT</span><span class="dyna-tab2">1)IAR,IDR/2)UOR/3)RRR,SSR/4)PSR,SRR</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">Note the following:</p>
<div class="dyna-shortblank">&nbsp;</div>
<ul class="dyna-list"><li>TIME was printed in the leftmost column of the output without being requested.</li><li>In addition to the column with TIME, there are 14 columns across the page, and up to 10 items can be printed in each.</li><li>On the PRINT card, items within a column were separated by commas while columns were separated by slashes.</li><li>More than one PRINT card may be used.</li></ul>
<p class="dyna-p1">There is one other DYNAMO output that is relatively unique, the plotted output. Figure 1-3 is an example. On the left is the equivalence between the variable name and the character plotted. Under this are the scales, and at the end of the scales are the characters that are plotted on those scales.</p>
<p class="dyna-p1">When two or more characters fall into the same position, the superposition is indicated at the top of the graph. For example, at TIME = 0, the letters R, S, P, and Q all fell on the same spot; R was printed on the graph, and RSPQ was printed at the end of the line. The first letter, R, is always the one appearing on the graph. If superpositions occurred at more than one position on a line, the superimposed sets are separated by commas, as can be seen at TIME 15. The card that instructed DYNAMO to generate Figure 1-3 is</p>
<div class="dyna-blankline">&nbsp;</div>
`
const page15text = `<div class="dyna-topline">
<span class="left-align">12</span>
<span class="right-align">primer</span>
</div>
<svg width="1280" height="980" viewBox="0 0 1280 980" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; font-size: 16px; }
  </style>
  <text class="dash" y="32"><tspan x="10">PAGE</tspan><tspan x="57">2</tspan><tspan x="125">2698JP</tspan></text>
  <text class="dash" y="64"><tspan x="31">TIME</tspan><tspan x="125">IAR</tspan><tspan x="210">UOR</tspan><tspan x="295">RRR</tspan><tspan x="380">PSR</tspan></text>
  <text class="dash" y="80"><tspan x="125">IDR</tspan><tspan x="295">SSR</tspan><tspan x="380">SRR</tspan></text>
  <text class="dash" y="96"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="112"><tspan x="32">E+00</tspan><tspan x="127">E+00</tspan><tspan x="212">E+00</tspan><tspan x="297">E+00</tspan><tspan x="382">E+00</tspan></text>
  <text class="dash" y="128"><tspan x="127">E+00</tspan><tspan x="297">E+00</tspan><tspan x="382">E+00</tspan></text>
  <text class="dash" y="144"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="160"><tspan x="32">.000</tspan><tspan x="119">8000.0</tspan><tspan x="204">1000.0</tspan><tspan x="289">1000.0</tspan><tspan x="374">1000.0</tspan></text>
  <text class="dash" y="176"><tspan x="119">8000.0</tspan><tspan x="289">1000.0</tspan><tspan x="374">1000.0</tspan></text>
  <text class="dash" y="192"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="208"><tspan x="23">2.000</tspan><tspan x="119">8000.0</tspan><tspan x="204">1000.0</tspan><tspan x="289">1000.0</tspan><tspan x="374">1000.0</tspan></text>
  <text class="dash" y="224"><tspan x="119">8000.0</tspan><tspan x="289">1000.0</tspan><tspan x="374">1000.0</tspan></text>
  <text class="dash" y="240"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="256"><tspan x="23">4.000</tspan><tspan x="119">8000.0</tspan><tspan x="204">1000.0</tspan><tspan x="289">1000.0</tspan><tspan x="374">1000.0</tspan></text>
  <text class="dash" y="272"><tspan x="119">8000.0</tspan><tspan x="289">1000.0</tspan><tspan x="374">1000.0</tspan></text>
  <text class="dash" y="288"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="304"><tspan x="23">6.000</tspan><tspan x="119">7968.0</tspan><tspan x="204">1065.1</tspan><tspan x="289">1100.0</tspan><tspan x="374">1131.6</tspan></text>
  <text class="dash" y="320"><tspan x="119">8094.6</tspan><tspan x="289">1065.1</tspan><tspan x="374">1015.2</tspan></text>
  <text class="dash" y="336"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="356"><tspan x="23">8.000</tspan><tspan x="119">7929.0</tspan><tspan x="204">1095.8</tspan><tspan x="289">1100.0</tspan><tspan x="374">1180.6</tspan></text>
  <text class="dash" y="372"><tspan x="119">8251.5</tspan><tspan x="289">1095.8</tspan><tspan x="374">1118.5</tspan></text>
  <text class="dash" y="388"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="404"><tspan x="14">10.000</tspan><tspan x="119">8031.4</tspan><tspan x="204">1099.5</tspan><tspan x="289">1100.0</tspan><tspan x="374">1185.5</tspan></text>
  <text class="dash" y="420"><tspan x="119">8373.5</tspan><tspan x="289">1099.5</tspan><tspan x="374">1173.2</tspan></text>
  <text class="dash" y="436"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="452"><tspan x="14">12.000</tspan><tspan x="119">8192.1</tspan><tspan x="204">1099.9</tspan><tspan x="289">1100.0</tspan><tspan x="374">1169.1</tspan></text>
  <text class="dash" y="468"><tspan x="119">8468.3</tspan><tspan x="289">1099.9</tspan><tspan x="374">1181.8</tspan></text>
  <text class="dash" y="484"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="500"><tspan x="14">14.000</tspan><tspan x="119">8344.8</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1149.3</tspan></text>
  <text class="dash" y="516"><tspan x="119">8542.1</tspan><tspan x="289">1100.0</tspan><tspan x="374">1168.2</tspan></text>
  <text class="dash" y="532"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="548"><tspan x="14">16.000</tspan><tspan x="119">8463.5</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1134.0</tspan></text>
  <text class="dash" y="564"><tspan x="119">8599.5</tspan><tspan x="289">1100.0</tspan><tspan x="374">1149.8</tspan></text>
  <text class="dash" y="580"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="596"><tspan x="14">18.000</tspan><tspan x="119">8548.0</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1124.0</tspan></text>
  <text class="dash" y="612"><tspan x="119">8644.1</tspan><tspan x="289">1100.0</tspan><tspan x="374">1134.7</tspan></text>
  <text class="dash" y="628"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="644"><tspan x="14">20.000</tspan><tspan x="119">8607.1</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1117.9</tspan></text>
  <text class="dash" y="660"><tspan x="119">8678.8</tspan><tspan x="289">1100.0</tspan><tspan x="374">1124.6</tspan></text>
  <text class="dash" y="676"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="692"><tspan x="14">22.000</tspan><tspan x="119">8649.8</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1114.0</tspan></text>
  <text class="dash" y="708"><tspan x="119">8705.7</tspan><tspan x="289">1100.0</tspan><tspan x="374">1118.3</tspan></text>
  <text class="dash" y="727"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="740"><tspan x="14">24.000</tspan><tspan x="119">8682.2</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1111.1</tspan></text>
  <text class="dash" y="756"><tspan x="119">8726.7</tspan><tspan x="289">1100.0</tspan><tspan x="374">1114.2</tspan></text>
  <text class="dash" y="772"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="788"><tspan x="14">26.000</tspan><tspan x="119">8707.6</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1108.9</tspan></text>
  <text class="dash" y="804"><tspan x="119">8743.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1111.2</tspan></text>
  <text class="dash" y="820"><tspan x="26">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="836"><tspan x="14">28.000</tspan><tspan x="119">8727.7</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1107.0</tspan></text>
  <text class="dash" y="852"><tspan x="119">8755.7</tspan><tspan x="289">1100.0</tspan><tspan x="374">1108.9</tspan></text>
  <text class="dash" y="868"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="884"><tspan x="14">30.000</tspan><tspan x="119">8743.7</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1105.5</tspan></text>
  <text class="dash" y="900"><tspan x="119">8765.5</tspan><tspan x="289">1100.0</tspan><tspan x="374">1107.0</tspan></text>
  <text class="dash" y="916"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
  <text class="dash" y="932"><tspan x="14">32.000</tspan><tspan x="119">8756.3</tspan><tspan x="204">1100.0</tspan><tspan x="289">1100.0</tspan><tspan x="374">1104.2</tspan></text>
  <text class="dash" y="948"><tspan x="119">8773.2</tspan><tspan x="289">1100.0</tspan><tspan x="374">1105.5</tspan></text>
  <text class="dash" y="964"><tspan x="10">-</tspan><tspan x="31">-</tspan><tspan x="52">-</tspan>
  <tspan x="73">-</tspan><tspan x="94">-</tspan><tspan x="115">-</tspan><tspan x="136">-</tspan>
  <tspan x="157">-</tspan><tspan x="178">-</tspan><tspan x="199">-</tspan><tspan x="220">-</tspan>
  <tspan x="241">-</tspan><tspan x="262">-</tspan><tspan x="283">-</tspan><tspan x="304">-</tspan>
  <tspan x="325">-</tspan><tspan x="346">-</tspan><tspan x="367">-</tspan><tspan x="388">-</tspan>
  <tspan x="409">-</tspan><tspan x="430">-</tspan><tspan x="451">-</tspan><tspan x="472">-</tspan>
  <tspan x="493">-</tspan><tspan x="514">-</tspan><tspan x="535">-</tspan><tspan x="556">-</tspan>
  <tspan x="577">-</tspan><tspan x="598">-</tspan><tspan x="619">-</tspan><tspan x="640">-</tspan>
  <tspan x="661">-</tspan><tspan x="682">-</tspan><tspan x="703">-</tspan><tspan x="724">-</tspan>
  <tspan x="745">-</tspan><tspan x="766">-</tspan><tspan x="787">-</tspan><tspan x="808">-</tspan>
  <tspan x="829">-</tspan><tspan x="850">-</tspan><tspan x="871">-</tspan><tspan x="892">-</tspan>
  <tspan x="913">-</tspan><tspan x="934">-</tspan><tspan x="955">-</tspan><tspan x="976">-</tspan>
  <tspan x="997">-</tspan><tspan x="1018">-</tspan><tspan x="1039">-</tspan><tspan x="1060">-</tspan>
  <tspan x="1081">-</tspan><tspan x="1102">-</tspan><tspan x="1123">-</tspan><tspan x="1144">-</tspan>
  <tspan x="1165">-</tspan><tspan x="1186">-</tspan><tspan x="1207">-</tspan><tspan x="1228">-</tspan>
  <tspan x="1249">-</tspan><tspan x="1270">-</tspan></text>
</svg>
<div class="dyna-caption">Figure 1-2 First page of tabulated results of model.</div>
<div class="dyna-blankline">&nbsp;</div>
`

const page16text = `<div class="dyna-topline">
<span class="left-align">completing the model</span>
<span class="right-align">13</span>
</div>
<svg width="1900" height="1200" viewBox="0 0 1900 1200" xmlns="http://www.w3.org/2000/svg">
<style> 
  .text { font-family: monospace; font-size: 16px; }
</style>
<g transform="rotate(-90 0 0) translate(-1200 0)">
<text class="text" x="70px" y="30px">IAR=I, UOR=U, RRR=R, SSR=S, PSR=P, SRR=Q</text>
<text class="text" x="90px" y="68px">1000</text>
<text class="text" x="318px" y="68px">1050</text>
<text class="text" x="558px" y="68px">1100</text>
<text class="text" x="798px" y="68px">1150</text>
<text class="text" x="1038px" y="68px">1200</text>
<text class="text" x="1112px" y="68px">QPSR</text>
<text class="text" x="110px" y="84px">0</text>
<text class="text" x="350px" y="84px">3T</text>
<text class="text" x="590px" y="84px">6T</text>
<text class="text" x="830px" y="84px">9T</text>
<text class="text" x="1060px" y="84px">12T</text>
<text class="text" x="1112px" y="84px">UI</text>
<text class="text" x="90px" y="100px">0</text>
<text class="text" x="100px" y="100px">R - - - U - - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="100px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="100px">. - - - - - - - -I- - - -&nbsp;</text>
<text class="text" x="823px" y="100px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="100px">.</text>
<text class="text" x="1080px" y="100px">R</text>
<text class="text" x="1090px" y="100px">S</text>
<text class="text" x="1100px" y="100px">P</text>
<text class="text" x="1110px" y="100px">Q</text>
<text class="text" x="100px" y="116px">R</text>
<text class="text" x="177px" y="116px">U</text>
<text class="text" x="341px" y="116px">.</text>
<text class="text" x="582px" y="116px">.</text>
<text class="text" x="746px" y="116px">I</text>
<text class="text" x="823px" y="116px">.</text>
<text class="text" x="1064px" y="116px">.</text>
<text class="text" x="1080px" y="116px">R</text>
<text class="text" x="1090px" y="116px">S</text>
<text class="text" x="1100px" y="116px">P</text>
<text class="text" x="1110px" y="116px">Q</text>
<text class="text" x="100px" y="132px">R</text>
<text class="text" x="177px" y="132px">U</text>
<text class="text" x="341px" y="132px">.</text>
<text class="text" x="582px" y="132px">.</text>
<text class="text" x="746px" y="132px">I</text>
<text class="text" x="823px" y="132px">.</text>
<text class="text" x="1064px" y="132px">.</text>
<text class="text" x="1080px" y="132px">R</text>
<text class="text" x="1090px" y="132px">S</text>
<text class="text" x="1100px" y="132px">P</text>
<text class="text" x="1110px" y="132px">Q</text>
<text class="text" x="100px" y="148px">R</text>
<text class="text" x="177px" y="148px">U</text>
<text class="text" x="341px" y="148px">.</text>
<text class="text" x="582px" y="148px">.</text>
<text class="text" x="746px" y="148px">I</text>
<text class="text" x="823px" y="148px">.</text>
<text class="text" x="1064px" y="148px">.</text>
<text class="text" x="1080px" y="148px">R</text>
<text class="text" x="1090px" y="148px">S</text>
<text class="text" x="1100px" y="148px">P</text>
<text class="text" x="1110px" y="148px">Q</text>
<text class="text" x="100px" y="164px">R</text>
<text class="text" x="177px" y="164px">U</text>
<text class="text" x="341px" y="164px">.</text>
<text class="text" x="582px" y="164px">.</text>
<text class="text" x="746px" y="164px">I</text>
<text class="text" x="823px" y="164px">.</text>
<text class="text" x="1064px" y="164px">.</text>
<text class="text" x="1080px" y="164px">R</text>
<text class="text" x="1090px" y="164px">S</text>
<text class="text" x="1100px" y="164px">P</text>
<text class="text" x="1110px" y="164px">Q</text>
<text class="text" x="100px" y="180px">R</text>
<text class="text" x="177px" y="180px">U</text>
<text class="text" x="341px" y="180px">.</text>
<text class="text" x="582px" y="180px">.</text>
<text class="text" x="746px" y="180px">I</text>
<text class="text" x="823px" y="180px">.</text>
<text class="text" x="1064px" y="180px">.</text>
<text class="text" x="1080px" y="180px">R</text>
<text class="text" x="1090px" y="180px">S</text>
<text class="text" x="1100px" y="180px">P</text>
<text class="text" x="1110px" y="180px">Q</text>
<text class="text" x="100px" y="196px">R</text>
<text class="text" x="177px" y="196px">U</text>
<text class="text" x="341px" y="196px">.</text>
<text class="text" x="582px" y="196px">.</text>
<text class="text" x="746px" y="196px">I</text>
<text class="text" x="823px" y="196px">.</text>
<text class="text" x="1064px" y="196px">.</text>
<text class="text" x="1080px" y="196px">R</text>
<text class="text" x="1090px" y="196px">S</text>
<text class="text" x="1100px" y="196px">P</text>
<text class="text" x="1110px" y="196px">Q</text>
<text class="text" x="100px" y="212px">R</text>
<text class="text" x="177px" y="212px">U</text>
<text class="text" x="341px" y="212px">.</text>
<text class="text" x="582px" y="212px">.</text>
<text class="text" x="746px" y="212px">I</text>
<text class="text" x="823px" y="212px">.</text>
<text class="text" x="1064px" y="212px">.</text>
<text class="text" x="1080px" y="212px">R</text>
<text class="text" x="1090px" y="212px">S</text>
<text class="text" x="1100px" y="212px">P</text>
<text class="text" x="1110px" y="212px">Q</text>
<text class="text" x="100px" y="228px">R</text>
<text class="text" x="177px" y="228px">U</text>
<text class="text" x="341px" y="228px">.</text>
<text class="text" x="582px" y="228px">.</text>
<text class="text" x="746px" y="228px">I</text>
<text class="text" x="823px" y="228px">.</text>
<text class="text" x="1064px" y="228px">.</text>
<text class="text" x="1080px" y="228px">R</text>
<text class="text" x="1090px" y="228px">S</text>
<text class="text" x="1100px" y="228px">P</text>
<text class="text" x="1110px" y="228px">Q</text>
<text class="text" x="100px" y="244px">R</text>
<text class="text" x="177px" y="244px">U</text>
<text class="text" x="341px" y="244px">.</text>
<text class="text" x="582px" y="244px">.</text>
<text class="text" x="746px" y="244px">I</text>
<text class="text" x="823px" y="244px">.</text>
<text class="text" x="1064px" y="244px">.</text>
<text class="text" x="1080px" y="244px">R</text>
<text class="text" x="1090px" y="244px">S</text>
<text class="text" x="1100px" y="244px">P</text>
<text class="text" x="1110px" y="244px">Q</text>
<text class="text" x="90px" y="260px">5</text>
<text class="text" x="100px" y="260px">S - - - U - - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="260px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="260px">R - - - - - - - -I- - - -&nbsp;</text>
<text class="text" x="823px" y="260px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="260px">.</text>
<text class="text" x="1080px" y="260px">S</text>
<text class="text" x="1090px" y="260px">P</text>
<text class="text" x="1100px" y="260px">Q</text>
<text class="text" x="100px" y="276px">.</text>
<text class="text" x="110px" y="276px">Q</text>
<text class="text" x="187px" y="276px">U</text>
<text class="text" x="291px" y="276px">S</text>
<text class="text" x="341px" y="276px">.</text>
<text class="text" x="582px" y="276px">R</text>
<text class="text" x="646px" y="276px">P</text>
<text class="text" x="746px" y="276px">I</text>
<text class="text" x="823px" y="276px">.</text>
<text class="text" x="1064px" y="276px">.</text>
<text class="text" x="100px" y="292px">.</text>
<text class="text" x="177px" y="292px">Q</text>
<text class="text" x="187px" y="292px">U</text>
<text class="text" x="341px" y="292px">.</text>
<text class="text" x="435px" y="292px">S</text>
<text class="text" x="582px" y="292px">R</text>
<text class="text" x="736px" y="292px">I</text>
<text class="text" x="823px" y="292px">.</text>
<text class="text" x="1064px" y="292px">.</text>
<text class="text" x="1080px" y="292px">I</text>
<text class="text" x="1090px" y="292px">P</text>
<text class="text" x="100px" y="308px">.</text>
<text class="text" x="187px" y="308px">U</text>
<text class="text" x="291px" y="308px">Q</text>
<text class="text" x="341px" y="308px">.</text>
<text class="text" x="485px" y="308px">S</text>
<text class="text" x="582px" y="308px">R</text>
<text class="text" x="736px" y="308px">I</text>
<text class="text" x="813px" y="308px">P</text>
<text class="text" x="823px" y="308px">.</text>
<text class="text" x="1064px" y="308px">.</text>
<text class="text" x="100px" y="324px">.</text>
<text class="text" x="187px" y="324px">U</text>
<text class="text" x="341px" y="324px">.</text>
<text class="text" x="445px" y="324px">Q</text>
<text class="text" x="522px" y="324px">S</text>
<text class="text" x="582px" y="324px">R</text>
<text class="text" x="736px" y="324px">I</text>
<text class="text" x="823px" y="324px">.</text>
<text class="text" x="883px" y="324px">P</text>
<text class="text" x="1064px" y="324px">.</text>
<text class="text" x="100px" y="340px">.</text>
<text class="text" x="187px" y="340px">U</text>
<text class="text" x="341px" y="340px">.</text>
<text class="text" x="542px" y="340px">S</text>
<text class="text" x="562px" y="340px">Q</text>
<text class="text" x="582px" y="340px">R</text>
<text class="text" x="736px" y="340px">I</text>
<text class="text" x="823px" y="340px">.</text>
<text class="text" x="939px" y="340px">P</text>
<text class="text" x="1064px" y="340px">.</text>
<text class="text" x="100px" y="356px">.</text>
<text class="text" x="187px" y="356px">U</text>
<text class="text" x="341px" y="356px">.</text>
<text class="text" x="562px" y="356px">S</text>
<text class="text" x="582px" y="356px">R</text>
<text class="text" x="666px" y="356px">Q</text>
<text class="text" x="736px" y="356px">I</text>
<text class="text" x="823px" y="356px">.</text>
<text class="text" x="973px" y="356px">P</text>
<text class="text" x="1064px" y="356px">.</text>
<text class="text" x="100px" y="372px">.</text>
<text class="text" x="187px" y="372px">U</text>
<text class="text" x="341px" y="372px">.</text>
<text class="text" x="572px" y="372px">S</text>
<text class="text" x="582px" y="372px">R</text>
<text class="text" x="736px" y="372px">I</text>
<text class="text" x="766px" y="372px">Q</text>
<text class="text" x="823px" y="372px">.</text>
<text class="text" x="997px" y="372px">P</text>
<text class="text" x="1064px" y="372px">.</text>
<text class="text" x="100px" y="388px">.</text>
<text class="text" x="187px" y="388px">U</text>
<text class="text" x="341px" y="388px">.</text>
<text class="text" x="572px" y="388px">S</text>
<text class="text" x="582px" y="388px">R</text>
<text class="text" x="736px" y="388px">I</text>
<text class="text" x="823px" y="388px">.</text>
<text class="text" x="843px" y="388px">Q</text>
<text class="text" x="1013px" y="388px">P</text>
<text class="text" x="1064px" y="388px">.</text>
<text class="text" x="100px" y="404px">.</text>
<text class="text" x="187px" y="404px">U</text>
<text class="text" x="341px" y="404px">.</text>
<text class="text" x="582px" y="404px">R</text>
<text class="text" x="746px" y="404px">I</text>
<text class="text" x="823px" y="404px">.</text>
<text class="text" x="893px" y="404px">Q</text>
<text class="text" x="1013px" y="404px">P</text>
<text class="text" x="1064px" y="404px">.</text>
<text class="text" x="1080px" y="404px">R</text>
<text class="text" x="1090px" y="404px">S</text>
<text class="text" x="80px" y="420px">10</text>
<text class="text" x="100px" y="420px">&nbsp&nbsp- - - -U- - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="420px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="420px">R - - - - - - - -I- - - -&nbsp;</text>
<text class="text" x="823px" y="420px">. - - - - - Q - - P - - -&nbsp;</text>
<text class="text" x="1064px" y="420px">.</text>
<text class="text" x="1080px" y="420px">R</text>
<text class="text" x="1090px" y="420px">S</text>
<text class="text" x="100px" y="436px">.</text>
<text class="text" x="187px" y="436px">U</text>
<text class="text" x="341px" y="436px">.</text>
<text class="text" x="582px" y="436px">R</text>
<text class="text" x="746px" y="436px">I</text>
<text class="text" x="823px" y="436px">.</text>
<text class="text" x="963px" y="436px">Q</text>
<text class="text" x="983px" y="436px">P</text>
<text class="text" x="1064px" y="436px">.</text>
<text class="text" x="1080px" y="436px">R</text>
<text class="text" x="1090px" y="436px">S</text>
<text class="text" x="100px" y="452px">.</text>
<text class="text" x="187px" y="452px">U</text>
<text class="text" x="341px" y="452px">.</text>
<text class="text" x="582px" y="452px">R</text>
<text class="text" x="756px" y="452px">I</text>
<text class="text" x="823px" y="452px">.</text>
<text class="text" x="963px" y="452px">P</text>
<text class="text" x="983px" y="452px">Q</text>
<text class="text" x="1064px" y="452px">.</text>
<text class="text" x="1080px" y="452px">R</text>
<text class="text" x="1090px" y="452px">S</text>
<text class="text" x="100px" y="468px">.</text>
<text class="text" x="187px" y="468px">U</text>
<text class="text" x="341px" y="468px">.</text>
<text class="text" x="582px" y="468px">R</text>
<text class="text" x="756px" y="468px">I</text>
<text class="text" x="823px" y="468px">.</text>
<text class="text" x="939px" y="468px">P</text>
<text class="text" x="983px" y="468px">Q</text>
<text class="text" x="1064px" y="468px">.</text>
<text class="text" x="1080px" y="468px">R</text>
<text class="text" x="1090px" y="468px">S</text>
<text class="text" x="100px" y="484px">.</text>
<text class="text" x="187px" y="484px">U</text>
<text class="text" x="341px" y="484px">.</text>
<text class="text" x="582px" y="484px">R</text>
<text class="text" x="756px" y="484px">I</text>
<text class="text" x="823px" y="484px">.</text>
<text class="text" x="919px" y="484px">P</text>
<text class="text" x="983px" y="484px">Q</text>
<text class="text" x="1064px" y="484px">.</text>
<text class="text" x="1080px" y="484px">R</text>
<text class="text" x="1090px" y="484px">S</text>
<text class="text" x="100px" y="500px">.</text>
<text class="text" x="187px" y="500px">U</text>
<text class="text" x="341px" y="500px">.</text>
<text class="text" x="582px" y="500px">R</text>
<text class="text" x="766px" y="500px">I</text>
<text class="text" x="823px" y="500px">.</text>
<text class="text" x="893px" y="500px">P</text>
<text class="text" x="973px" y="500px">Q</text>
<text class="text" x="1064px" y="500px">.</text>
<text class="text" x="1080px" y="500px">R</text>
<text class="text" x="1090px" y="500px">S</text>
<text class="text" x="100px" y="516px">.</text>
<text class="text" x="187px" y="516px">U</text>
<text class="text" x="341px" y="516px">.</text>
<text class="text" x="582px" y="516px">R</text>
<text class="text" x="766px" y="516px">I</text>
<text class="text" x="823px" y="516px">.</text>
<text class="text" x="863px" y="516px">P</text>
<text class="text" x="953px" y="516px">Q</text>
<text class="text" x="1064px" y="516px">.</text>
<text class="text" x="1080px" y="516px">R</text>
<text class="text" x="1090px" y="516px">S</text>
<text class="text" x="100px" y="532px">.</text>
<text class="text" x="187px" y="532px">U</text>
<text class="text" x="341px" y="532px">.</text>
<text class="text" x="582px" y="532px">R</text>
<text class="text" x="766px" y="532px">I</text>
<text class="text" x="823px" y="532px">.</text>
<text class="text" x="843px" y="532px">P</text>
<text class="text" x="933px" y="532px">Q</text>
<text class="text" x="1064px" y="532px">.</text>
<text class="text" x="1080px" y="532px">R</text>
<text class="text" x="1090px" y="532px">S</text>
<text class="text" x="100px" y="548px">.</text>
<text class="text" x="187px" y="548px">U</text>
<text class="text" x="341px" y="548px">.</text>
<text class="text" x="582px" y="548px">R</text>
<text class="text" x="776px" y="548px">I</text>
<text class="text" x="823px" y="548px">P</text>
<text class="text" x="913px" y="548px">Q</text>
<text class="text" x="1064px" y="548px">.</text>
<text class="text" x="1080px" y="548px">R</text>
<text class="text" x="1090px" y="548px">S</text>
<text class="text" x="100px" y="564px">.</text>
<text class="text" x="187px" y="564px">U</text>
<text class="text" x="341px" y="564px">.</text>
<text class="text" x="582px" y="564px">R</text>
<text class="text" x="776px" y="564px">I</text>
<text class="text" x="796px" y="564px">P</text>
<text class="text" x="823px" y="564px">.</text>
<text class="text" x="893px" y="564px">Q</text>
<text class="text" x="1064px" y="564px">.</text>
<text class="text" x="1080px" y="564px">R</text>
<text class="text" x="1090px" y="564px">S</text>
<text class="text" x="80px" y="580px">15</text>
<text class="text" x="100px" y="580px">&nbsp&nbsp- - - -U- - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="580px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="580px">R - - - - - - - - - I - -&nbsp;</text>
<text class="text" x="823px" y="580px">. - -Q- - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="580px">.</text>
<text class="text" x="1080px" y="580px">R</text>
<text class="text" x="1090px" y="580px">S</text>
<text class="text" x="1100px" y="580px">.</text>
<text class="text" x="1110px" y="580px">I</text>
<text class="text" x="1120px" y="580px">P</text>
<text class="text" x="100px" y="596px">.</text>
<text class="text" x="187px" y="596px">U</text>
<text class="text" x="341px" y="596px">.</text>
<text class="text" x="582px" y="596px">R</text>
<text class="text" x="766px" y="596px">P</text>
<text class="text" x="776px" y="596px">I</text>
<text class="text" x="823px" y="596px">.</text>
<text class="text" x="843px" y="596px">Q</text>
<text class="text" x="1064px" y="596px">.</text>
<text class="text" x="1080px" y="596px">R</text>
<text class="text" x="1090px" y="596px">S</text>
<text class="text" x="100px" y="612px">.</text>
<text class="text" x="187px" y="612px">U</text>
<text class="text" x="341px" y="612px">.</text>
<text class="text" x="582px" y="612px">R</text>
<text class="text" x="746px" y="612px">P</text>
<text class="text" x="785px" y="612px">I</text>
<text class="text" x="823px" y="612px">Q</text>
<text class="text" x="1064px" y="612px">.</text>
<text class="text" x="1080px" y="612px">R</text>
<text class="text" x="1090px" y="612px">S</text>
<text class="text" x="100px" y="628px">.</text>
<text class="text" x="187px" y="628px">U</text>
<text class="text" x="341px" y="628px">.</text>
<text class="text" x="582px" y="628px">R</text>
<text class="text" x="736px" y="628px">P</text>
<text class="text" x="785px" y="628px">I</text>
<text class="text" x="806px" y="628px">Q</text>
<text class="text" x="823px" y="628px">.</text>
<text class="text" x="1064px" y="628px">.</text>
<text class="text" x="1080px" y="628px">R</text>
<text class="text" x="1090px" y="628px">S</text>
<text class="text" x="100px" y="644px">.</text>
<text class="text" x="187px" y="644px">U</text>
<text class="text" x="341px" y="644px">.</text>
<text class="text" x="582px" y="644px">R</text>
<text class="text" x="716px" y="644px">P</text>
<text class="text" x="785px" y="644px">I</text>
<text class="text" x="823px" y="644px">.</text>
<text class="text" x="1064px" y="644px">.</text>
<text class="text" x="1080px" y="644px">R</text>
<text class="text" x="1090px" y="644px">S</text>
<text class="text" x="1100px" y="644px">.</text>
<text class="text" x="1110px" y="644px">I</text>
<text class="text" x="1120px" y="644px">Q</text>
<text class="text" x="100px" y="660px">.</text>
<text class="text" x="187px" y="660px">U</text>
<text class="text" x="341px" y="660px">.</text>
<text class="text" x="582px" y="660px">R</text>
<text class="text" x="706px" y="660px">P</text>
<text class="text" x="766px" y="660px">Q</text>
<text class="text" x="785px" y="660px">I</text>
<text class="text" x="823px" y="660px">.</text>
<text class="text" x="1064px" y="660px">.</text>
<text class="text" x="1080px" y="660px">R</text>
<text class="text" x="1090px" y="660px">S</text>
<text class="text" x="100px" y="676px">.</text>
<text class="text" x="187px" y="676px">U</text>
<text class="text" x="341px" y="676px">.</text>
<text class="text" x="582px" y="676px">R</text>
<text class="text" x="696px" y="676px">P</text>
<text class="text" x="746px" y="676px">Q</text>
<text class="text" x="785px" y="676px">I</text>
<text class="text" x="823px" y="676px">.</text>
<text class="text" x="1064px" y="676px">.</text>
<text class="text" x="1080px" y="676px">R</text>
<text class="text" x="1090px" y="676px">S</text>
<text class="text" x="100px" y="692px">.</text>
<text class="text" x="187px" y="692px">U</text>
<text class="text" x="341px" y="692px">.</text>
<text class="text" x="582px" y="692px">R</text>
<text class="text" x="686px" y="692px">P</text>
<text class="text" x="736px" y="692px">Q</text>
<text class="text" x="785px" y="692px">I</text>
<text class="text" x="823px" y="692px">.</text>
<text class="text" x="1064px" y="692px">.</text>
<text class="text" x="1080px" y="692px">R</text>
<text class="text" x="1090px" y="692px">S</text>
<text class="text" x="100px" y="708px">.</text>
<text class="text" x="187px" y="708px">U</text>
<text class="text" x="341px" y="708px">.</text>
<text class="text" x="582px" y="708px">R</text>
<text class="text" x="676px" y="708px">P</text>
<text class="text" x="726px" y="708px">Q</text>
<text class="text" x="794px" y="708px">I</text>
<text class="text" x="823px" y="708px">.</text>
<text class="text" x="1064px" y="708px">.</text>
<text class="text" x="1080px" y="708px">R</text>
<text class="text" x="1090px" y="708px">S</text>
<text class="text" x="100px" y="724px">.</text>
<text class="text" x="187px" y="724px">U</text>
<text class="text" x="341px" y="724px">.</text>
<text class="text" x="582px" y="724px">R</text>
<text class="text" x="676px" y="724px">P</text>
<text class="text" x="706px" y="724px">Q</text>
<text class="text" x="794px" y="724px">I</text>
<text class="text" x="823px" y="724px">.</text>
<text class="text" x="1064px" y="724px">.</text>
<text class="text" x="1080px" y="724px">R</text>
<text class="text" x="1090px" y="724px">S</text>
<text class="text" x="80px" y="740px">20</text>
<text class="text" x="100px" y="740px">&nbsp&nbsp- - - -U- - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="740px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="740px">R - - - -P- Q - - - - I -&nbsp;</text>
<text class="text" x="823px" y="740px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="740px">.</text>
<text class="text" x="1080px" y="740px">R</text>
<text class="text" x="1090px" y="740px">S</text>
<text class="text" x="100px" y="756px">.</text>
<text class="text" x="187px" y="756px">U</text>
<text class="text" x="341px" y="756px">.</text>
<text class="text" x="582px" y="756px">R</text>
<text class="text" x="663px" y="756px">P</text>
<text class="text" x="693px" y="756px">Q</text>
<text class="text" x="794px" y="756px">I</text>
<text class="text" x="823px" y="756px">.</text>
<text class="text" x="1064px" y="756px">.</text>
<text class="text" x="1080px" y="756px">R</text>
<text class="text" x="1090px" y="756px">S</text>
<text class="text" x="100px" y="772px">.</text>
<text class="text" x="187px" y="772px">U</text>
<text class="text" x="341px" y="772px">.</text>
<text class="text" x="582px" y="772px">R</text>
<text class="text" x="663px" y="772px">P</text>
<text class="text" x="693px" y="772px">Q</text>
<text class="text" x="794px" y="772px">I</text>
<text class="text" x="823px" y="772px">.</text>
<text class="text" x="1064px" y="772px">.</text>
<text class="text" x="1080px" y="772px">R</text>
<text class="text" x="1090px" y="772px">S</text>
<text class="text" x="100px" y="788px">.</text>
<text class="text" x="187px" y="788px">U</text>
<text class="text" x="341px" y="788px">.</text>
<text class="text" x="582px" y="788px">R</text>
<text class="text" x="653px" y="788px">P</text>
<text class="text" x="683px" y="788px">Q</text>
<text class="text" x="794px" y="788px">I</text>
<text class="text" x="341px" y="788px">.</text>
<text class="text" x="582px" y="788px">.</text>
<text class="text" x="823px" y="788px">.</text>
<text class="text" x="1064px" y="788px">.</text>
<text class="text" x="1080px" y="788px">R</text>
<text class="text" x="1090px" y="788px">S</text>
<text class="text" x="100px" y="804px">.</text>
<text class="text" x="187px" y="804px">U</text>
<text class="text" x="341px" y="804px">.</text>
<text class="text" x="582px" y="804px">R</text>
<text class="text" x="653px" y="804px">P</text>
<text class="text" x="673px" y="804px">Q</text>
<text class="text" x="794px" y="804px">I</text>
<text class="text" x="823px" y="804px">.</text>
<text class="text" x="1064px" y="804px">.</text>
<text class="text" x="1080px" y="804px">R</text>
<text class="text" x="1090px" y="804px">S</text>
<text class="text" x="100px" y="820px">.</text>
<text class="text" x="187px" y="820px">U</text>
<text class="text" x="341px" y="820px">.</text>
<text class="text" x="582px" y="820px">R</text>
<text class="text" x="653px" y="820px">P</text>
<text class="text" x="673px" y="820px">Q</text>
<text class="text" x="794px" y="820px">I</text>
<text class="text" x="823px" y="820px">.</text>
<text class="text" x="1064px" y="820px">.</text>
<text class="text" x="1080px" y="820px">R</text>
<text class="text" x="1090px" y="820px">S</text>
<text class="text" x="100px" y="836px">.</text>
<text class="text" x="187px" y="836px">U</text>
<text class="text" x="341px" y="836px">.</text>
<text class="text" x="582px" y="836px">R</text>
<text class="text" x="640px" y="836px">P</text>
<text class="text" x="661px" y="836px">Q</text>
<text class="text" x="794px" y="836px">I</text>
<text class="text" x="341px" y="836px">.</text>
<text class="text" x="582px" y="836px">.</text>
<text class="text" x="823px" y="836px">.</text>
<text class="text" x="1064px" y="836px">.</text>
<text class="text" x="1080px" y="836px">R</text>
<text class="text" x="1090px" y="836px">S</text>
<text class="text" x="100px" y="852px">.</text>
<text class="text" x="187px" y="852px">U</text>
<text class="text" x="341px" y="852px">.</text>
<text class="text" x="582px" y="852px">R</text>
<text class="text" x="640px" y="852px">P</text>
<text class="text" x="661px" y="852px">Q</text>
<text class="text" x="794px" y="852px">I</text>
<text class="text" x="823px" y="852px">.</text>
<text class="text" x="1064px" y="852px">.</text>
<text class="text" x="1080px" y="852px">R</text>
<text class="text" x="1090px" y="852px">S</text>
<text class="text" x="100px" y="868px">.</text>
<text class="text" x="187px" y="868px">U</text>
<text class="text" x="341px" y="868px">.</text>
<text class="text" x="582px" y="868px">R</text>
<text class="text" x="640px" y="868px">P</text>
<text class="text" x="651px" y="868px">Q</text>
<text class="text" x="794px" y="868px">I</text>
<text class="text" x="823px" y="868px">.</text>
<text class="text" x="1064px" y="868px">.</text>
<text class="text" x="1080px" y="868px">R</text>
<text class="text" x="1090px" y="868px">S</text>
<text class="text" x="100px" y="884px">.</text>
<text class="text" x="187px" y="884px">U</text>
<text class="text" x="341px" y="884px">.</text>
<text class="text" x="582px" y="884px">R</text>
<text class="text" x="630px" y="884px">P</text>
<text class="text" x="651px" y="884px">Q</text>
<text class="text" x="794px" y="884px">I</text>
<text class="text" x="823px" y="884px">.</text>
<text class="text" x="1064px" y="884px">.</text>
<text class="text" x="1080px" y="884px">R</text>
<text class="text" x="1090px" y="884px">S</text>
<text class="text" x="80px" y="900px">25</text>
<text class="text" x="100px" y="900px">&nbsp&nbsp- - - -U- - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="900px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="900px">R - -PQ - - - - - - - I -&nbsp;</text>
<text class="text" x="823px" y="900px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="900px">.</text>
<text class="text" x="1080px" y="900px">R</text>
<text class="text" x="1090px" y="900px">S</text>
<text class="text" x="100px" y="916px">.</text>
<text class="text" x="187px" y="916px">U</text>
<text class="text" x="341px" y="916px">.</text>
<text class="text" x="582px" y="916px">R</text>
<text class="text" x="630px" y="916px">P</text>
<text class="text" x="640px" y="916px">Q</text>
<text class="text" x="804px" y="916px">I</text>
<text class="text" x="823px" y="916px">.</text>
<text class="text" x="1064px" y="916px">.</text>
<text class="text" x="1080px" y="916px">R</text>
<text class="text" x="1090px" y="916px">S</text>
<text class="text" x="100px" y="932px">.</text>
<text class="text" x="187px" y="932px">U</text>
<text class="text" x="341px" y="932px">.</text>
<text class="text" x="582px" y="932px">R</text>
<text class="text" x="620px" y="932px">P</text>
<text class="text" x="640px" y="932px">Q</text>
<text class="text" x="804px" y="932px">I</text>
<text class="text" x="823px" y="932px">.</text>
<text class="text" x="1064px" y="932px">.</text>
<text class="text" x="1080px" y="932px">R</text>
<text class="text" x="1090px" y="932px">S</text>
<text class="text" x="100px" y="948px">.</text>
<text class="text" x="187px" y="948px">U</text>
<text class="text" x="341px" y="948px">.</text>
<text class="text" x="582px" y="948px">R</text>
<text class="text" x="620px" y="948px">P</text>
<text class="text" x="630px" y="948px">Q</text>
<text class="text" x="804px" y="948px">I</text>
<text class="text" x="823px" y="948px">.</text>
<text class="text" x="1064px" y="948px">.</text>
<text class="text" x="1080px" y="948px">R</text>
<text class="text" x="1090px" y="948px">S</text>
<text class="text" x="100px" y="964px">.</text>
<text class="text" x="187px" y="964px">U</text>
<text class="text" x="341px" y="964px">.</text>
<text class="text" x="582px" y="964px">R</text>
<text class="text" x="620px" y="964px">P</text>
<text class="text" x="630px" y="964px">Q</text>
<text class="text" x="804px" y="964px">I</text>
<text class="text" x="823px" y="964px">.</text>
<text class="text" x="1064px" y="964px">.</text>
<text class="text" x="1080px" y="964px">R</text>
<text class="text" x="1090px" y="964px">S</text>
<text class="text" x="100px" y="980px">.</text>
<text class="text" x="187px" y="980px">U</text>
<text class="text" x="341px" y="980px">.</text>
<text class="text" x="582px" y="980px">R</text>
<text class="text" x="620px" y="980px">P</text>
<text class="text" x="630px" y="980px">Q</text>
<text class="text" x="804px" y="980px">I</text>
<text class="text" x="823px" y="980px">.</text>
<text class="text" x="1064px" y="980px">.</text>
<text class="text" x="1080px" y="980px">R</text>
<text class="text" x="1090px" y="980px">S</text>
<text class="text" x="100px" y="996px">.</text>
<text class="text" x="187px" y="996px">U</text>
<text class="text" x="341px" y="996px">.</text>
<text class="text" x="582px" y="996px">R</text>
<text class="text" x="611px" y="996px">P</text>
<text class="text" x="621px" y="996px">Q</text>
<text class="text" x="804px" y="996px">I</text>
<text class="text" x="823px" y="996px">.</text>
<text class="text" x="1064px" y="996px">.</text>
<text class="text" x="1080px" y="996px">R</text>
<text class="text" x="1090px" y="996px">S</text>
<text class="text" x="100px" y="1012px">.</text>
<text class="text" x="187px" y="1012px">U</text>
<text class="text" x="341px" y="1012px">.</text>
<text class="text" x="582px" y="1012px">R</text>
<text class="text" x="611px" y="1012px">P</text>
<text class="text" x="621px" y="1012px">Q</text>
<text class="text" x="804px" y="1012px">I</text>
<text class="text" x="823px" y="1012px">.</text>
<text class="text" x="1064px" y="1012px">.</text>
<text class="text" x="1080px" y="1012px">R</text>
<text class="text" x="1090px" y="1012px">S</text>
<text class="text" x="100px" y="1028px">.</text>
<text class="text" x="187px" y="1028px">U</text>
<text class="text" x="341px" y="1028px">.</text>
<text class="text" x="582px" y="1028px">R</text>
<text class="text" x="611px" y="1028px">P</text>
<text class="text" x="621px" y="1028px">Q</text>
<text class="text" x="804px" y="1028px">I</text>
<text class="text" x="823px" y="1028px">.</text>
<text class="text" x="1064px" y="1028px">.</text>
<text class="text" x="1080px" y="1028px">R</text>
<text class="text" x="1090px" y="1028px">S</text>
<text class="text" x="100px" y="1044px">.</text>
<text class="text" x="187px" y="1044px">U</text>
<text class="text" x="341px" y="1044px">.</text>
<text class="text" x="582px" y="1044px">R</text>
<text class="text" x="611px" y="1044px">P</text>
<text class="text" x="621px" y="1044px">Q</text>
<text class="text" x="804px" y="1044px">I</text>
<text class="text" x="823px" y="1044px">.</text>
<text class="text" x="1064px" y="1044px">.</text>
<text class="text" x="1080px" y="1044px">R</text>
<text class="text" x="1090px" y="1044px">S</text>
<text class="text" x="80px" y="1060px">30</text>
<text class="text" x="100px" y="1060px">&nbsp&nbsp- - - -U- - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="1060px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="1060px">R -PO - - - - - - - - -I -&nbsp;</text>
<text class="text" x="823px" y="1060px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="1060px">.</text>
<text class="text" x="1080px" y="1060px">R</text>
<text class="text" x="1090px" y="1060px">S</text>
<text class="text" x="100px" y="1076px">.</text>
<text class="text" x="187px" y="1076px">U</text>
<text class="text" x="341px" y="1076px">.</text>
<text class="text" x="582px" y="1076px">R</text>
<text class="text" x="611px" y="1076px">P</text>
<text class="text" x="804px" y="1076px">I</text>
<text class="text" x="823px" y="1076px">.</text>
<text class="text" x="1064px" y="1076px">.</text>
<text class="text" x="1080px" y="1076px">R</text>
<text class="text" x="1090px" y="1076px">S</text>
<text class="text" x="1100px" y="1076px">.</text>
<text class="text" x="1110px" y="1076px">P</text>
<text class="text" x="1120px" y="1076px">Q</text>
<text class="text" x="100px" y="1092px">.</text>
<text class="text" x="187px" y="1092px">U</text>
<text class="text" x="341px" y="1092px">.</text>
<text class="text" x="582px" y="1092px">R</text>
<text class="text" x="601px" y="1092px">P</text>
<text class="text" x="611px" y="1092px">Q</text>
<text class="text" x="804px" y="1092px">I</text>
<text class="text" x="823px" y="1092px">.</text>
<text class="text" x="1064px" y="1092px">.</text>
<text class="text" x="1080px" y="1092px">R</text>
<text class="text" x="1090px" y="1092px">S</text>
<text class="text" x="100px" y="1108px">.</text>
<text class="text" x="187px" y="1108px">U</text>
<text class="text" x="341px" y="1108px">.</text>
<text class="text" x="582px" y="1108px">R</text>
<text class="text" x="601px" y="1108px">P</text>
<text class="text" x="611px" y="1108px">Q</text>
<text class="text" x="804px" y="1108px">I</text>
<text class="text" x="823px" y="1108px">.</text>
<text class="text" x="1064px" y="1108px">.</text>
<text class="text" x="1080px" y="1108px">R</text>
<text class="text" x="1090px" y="1108px">S</text>
<text class="text" x="100px" y="1124px">.</text>
<text class="text" x="187px" y="1124px">U</text>
<text class="text" x="341px" y="1124px">.</text>
<text class="text" x="582px" y="1124px">R</text>
<text class="text" x="601px" y="1124px">P</text>
<text class="text" x="611px" y="1124px">Q</text>
<text class="text" x="804px" y="1124px">I</text>
<text class="text" x="823px" y="1124px">.</text>
<text class="text" x="1064px" y="1124px">.</text>
<text class="text" x="1080px" y="1124px">R</text>
<text class="text" x="1090px" y="1124px">S</text>
<text class="text" x="100px" y="1140px">.</text>
<text class="text" x="187px" y="1140px">U</text>
<text class="text" x="341px" y="1140px">.</text>
<text class="text" x="582px" y="1140px">R</text>
<text class="text" x="601px" y="1140px">P</text>
<text class="text" x="611px" y="1140px">Q</text>
<text class="text" x="804px" y="1140px">I</text>
<text class="text" x="341px" y="1140px">.</text>
<text class="text" x="582px" y="1140px">.</text>
<text class="text" x="823px" y="1140px">.</text>
<text class="text" x="1064px" y="1140px">.</text>
<text class="text" x="1080px" y="1140px">R</text>
<text class="text" x="1090px" y="1140px">S</text>
<text class="text" x="100px" y="1156px">.</text>
<text class="text" x="187px" y="1156px">U</text>
<text class="text" x="341px" y="1156px">.</text>
<text class="text" x="582px" y="1156px">R</text>
<text class="text" x="601px" y="1156px">P</text>
<text class="text" x="804px" y="1156px">I</text>
<text class="text" x="823px" y="1156px">.</text>
<text class="text" x="1064px" y="1156px">.</text>
<text class="text" x="1080px" y="1156px">R</text>
<text class="text" x="1090px" y="1156px">S</text>
<text class="text" x="1100px" y="1156px">.</text>
<text class="text" x="1110px" y="1156px">P</text>
<text class="text" x="1120px" y="1156px">Q</text>
<text class="text" x="100px" y="1172px">.</text>
<text class="text" x="187px" y="1172px">U</text>
<text class="text" x="341px" y="1172px">.</text>
<text class="text" x="582px" y="1172px">R</text>
<text class="text" x="601px" y="1172px">P</text>
<text class="text" x="804px" y="1172px">I</text>
<text class="text" x="823px" y="1172px">.</text>
<text class="text" x="1064px" y="1172px">.</text>
<text class="text" x="1080px" y="1172px">R</text>
<text class="text" x="1090px" y="1172px">S</text>
<text class="text" x="1100px" y="1172px">.</text>
<text class="text" x="1110px" y="1172px">P</text>
<text class="text" x="1120px" y="1172px">Q</text>
<text class="text" x="100px" y="1188px">.</text>
<text class="text" x="187px" y="1188px">U</text>
<text class="text" x="341px" y="1188px">.</text>
<text class="text" x="582px" y="1188px">R</text>
<text class="text" x="601px" y="1188px">P</text>
<text class="text" x="804px" y="1188px">I</text>
<text class="text" x="823px" y="1188px">.</text>
<text class="text" x="1064px" y="1188px">.</text>
<text class="text" x="1080px" y="1188px">R</text>
<text class="text" x="1090px" y="1188px">S</text>
<text class="text" x="1100px" y="1188px">.</text>
<text class="text" x="1110px" y="1188px">P</text>
<text class="text" x="1120px" y="1188px">Q</text>
<text class="text" x="100px" y="1204px">.</text>
<text class="text" x="187px" y="1204px">U</text>
<text class="text" x="341px" y="1204px">.</text>
<text class="text" x="582px" y="1204px">R</text>
<text class="text" x="601px" y="1204px">P</text>
<text class="text" x="804px" y="1204px">I</text>
<text class="text" x="823px" y="1204px">.</text>
<text class="text" x="1064px" y="1204px">.</text>
<text class="text" x="1080px" y="1204px">R</text>
<text class="text" x="1090px" y="1204px">S</text>
<text class="text" x="1100px" y="1204px">.</text>
<text class="text" x="1110px" y="1204px">P</text>
<text class="text" x="1120px" y="1204px">Q</text>
<text class="text" x="80px" y="1220px">35</text>
<text class="text" x="100px" y="1220px">&nbsp&nbsp- - - -U- - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="1220px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="1220px">RPQ - - - - - - - - - -I-&nbsp;</text>
<text class="text" x="823px" y="1220px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="1220px">.</text>
<text class="text" x="1080px" y="1220px">R</text>
<text class="text" x="1090px" y="1220px">S</text>
<text class="text" x="100px" y="1236px">.</text>
<text class="text" x="187px" y="1236px">U</text>
<text class="text" x="341px" y="1236px">.</text>
<text class="text" x="582px" y="1236px">R</text>
<text class="text" x="592px" y="1236px">P</text>
<text class="text" x="602px" y="1236px">Q</text>
<text class="text" x="804px" y="1236px">I</text>
<text class="text" x="341px" y="1236px">.</text>
<text class="text" x="582px" y="1236px">.</text>
<text class="text" x="823px" y="1236px">.</text>
<text class="text" x="1064px" y="1236px">.</text>
<text class="text" x="1080px" y="1236px">R</text>
<text class="text" x="1090px" y="1236px">S</text>
<text class="text" x="100px" y="1252px">.</text>
<text class="text" x="187px" y="1252px">U</text>
<text class="text" x="341px" y="1252px">.</text>
<text class="text" x="582px" y="1252px">R</text>
<text class="text" x="592px" y="1252px">P</text>
<text class="text" x="602px" y="1252px">Q</text>
<text class="text" x="804px" y="1252px">I</text>
<text class="text" x="823px" y="1252px">.</text>
<text class="text" x="1064px" y="1252px">.</text>
<text class="text" x="1080px" y="1252px">R</text>
<text class="text" x="1090px" y="1252px">S</text>
<text class="text" x="100px" y="1268px">.</text>
<text class="text" x="187px" y="1268px">U</text>
<text class="text" x="341px" y="1268px">.</text>
<text class="text" x="582px" y="1268px">R</text>
<text class="text" x="592px" y="1268px">P</text>
<text class="text" x="602px" y="1268px">Q</text>
<text class="text" x="804px" y="1268px">I</text>
<text class="text" x="823px" y="1268px">.</text>
<text class="text" x="1064px" y="1268px">.</text>
<text class="text" x="1080px" y="1268px">R</text>
<text class="text" x="1090px" y="1268px">S</text>
<text class="text" x="100px" y="1284px">.</text>
<text class="text" x="187px" y="1284px">U</text>
<text class="text" x="341px" y="1284px">.</text>
<text class="text" x="582px" y="1284px">R</text>
<text class="text" x="592px" y="1284px">P</text>
<text class="text" x="804px" y="1284px">I</text>
<text class="text" x="823px" y="1284px">.</text>
<text class="text" x="1064px" y="1284px">.</text>
<text class="text" x="1080px" y="1284px">R</text>
<text class="text" x="1090px" y="1284px">S</text>
<text class="text" x="1100px" y="1284px">.</text>
<text class="text" x="1110px" y="1284px">P</text>
<text class="text" x="1120px" y="1284px">Q</text>
<text class="text" x="100px" y="1300px">.</text>
<text class="text" x="187px" y="1300px">U</text>
<text class="text" x="341px" y="1300px">.</text>
<text class="text" x="582px" y="1300px">R</text>
<text class="text" x="592px" y="1300px">P</text>
<text class="text" x="804px" y="1300px">I</text>
<text class="text" x="823px" y="1300px">.</text>
<text class="text" x="1064px" y="1300px">.</text>
<text class="text" x="1080px" y="1300px">R</text>
<text class="text" x="1090px" y="1300px">S</text>
<text class="text" x="1100px" y="1300px">.</text>
<text class="text" x="1110px" y="1300px">P</text>
<text class="text" x="1120px" y="1300px">Q</text>
<text class="text" x="100px" y="1316px">.</text>
<text class="text" x="187px" y="1316px">U</text>
<text class="text" x="341px" y="1316px">.</text>
<text class="text" x="582px" y="1316px">R</text>
<text class="text" x="592px" y="1316px">P</text>
<text class="text" x="804px" y="1316px">I</text>
<text class="text" x="823px" y="1316px">.</text>
<text class="text" x="1064px" y="1316px">.</text>
<text class="text" x="1080px" y="1316px">R</text>
<text class="text" x="1090px" y="1316px">S</text>
<text class="text" x="1100px" y="1316px">.</text>
<text class="text" x="1110px" y="1316px">P</text>
<text class="text" x="1120px" y="1316px">Q</text>
<text class="text" x="100px" y="1332px">.</text>
<text class="text" x="187px" y="1332px">U</text>
<text class="text" x="341px" y="1332px">.</text>
<text class="text" x="582px" y="1332px">R</text>
<text class="text" x="592px" y="1332px">P</text>
<text class="text" x="804px" y="1332px">I</text>
<text class="text" x="823px" y="1332px">.</text>
<text class="text" x="1064px" y="1332px">.</text>
<text class="text" x="1080px" y="1332px">R</text>
<text class="text" x="1090px" y="1332px">S</text>
<text class="text" x="1100px" y="1332px">.</text>
<text class="text" x="1110px" y="1332px">P</text>
<text class="text" x="1120px" y="1332px">Q</text>
<text class="text" x="100px" y="1348px">.</text>
<text class="text" x="187px" y="1348px">U</text>
<text class="text" x="341px" y="1348px">.</text>
<text class="text" x="582px" y="1348px">R</text>
<text class="text" x="592px" y="1348px">P</text>
<text class="text" x="804px" y="1348px">I</text>
<text class="text" x="823px" y="1348px">.</text>
<text class="text" x="1064px" y="1348px">.</text>
<text class="text" x="1080px" y="1348px">R</text>
<text class="text" x="1090px" y="1348px">S</text>
<text class="text" x="1100px" y="1348px">.</text>
<text class="text" x="1110px" y="1348px">P</text>
<text class="text" x="1120px" y="1348px">Q</text>
<text class="text" x="100px" y="1364px">.</text>
<text class="text" x="187px" y="1364px">U</text>
<text class="text" x="341px" y="1364px">.</text>
<text class="text" x="582px" y="1364px">R</text>
<text class="text" x="592px" y="1364px">P</text>
<text class="text" x="804px" y="1364px">I</text>
<text class="text" x="823px" y="1364px">.</text>
<text class="text" x="1064px" y="1364px">.</text>
<text class="text" x="1080px" y="1364px">R</text>
<text class="text" x="1090px" y="1364px">S</text>
<text class="text" x="1100px" y="1364px">.</text>
<text class="text" x="1110px" y="1364px">P</text>
<text class="text" x="1120px" y="1364px">Q</text>
<text class="text" x="80px" y="1380px">40</text>
<text class="text" x="100px" y="1380px">&nbsp&nbsp- - - -U- - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="1380px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="1380px">RP- - - - - - - - - - -I-&nbsp;</text>
<text class="text" x="823px" y="1380px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="1380px">.</text>
<text class="text" x="1080px" y="1380px">R</text>
<text class="text" x="1090px" y="1380px">S</text>
<text class="text" x="1100px" y="1380px">.</text>
<text class="text" x="1110px" y="1380px">P</text>
<text class="text" x="1120px" y="1380px">Q</text>
<text class="text" x="100px" y="1396px">.</text>
<text class="text" x="187px" y="1396px">U</text>
<text class="text" x="341px" y="1396px">.</text>
<text class="text" x="582px" y="1396px">R</text>
<text class="text" x="592px" y="1396px">P</text>
<text class="text" x="804px" y="1396px">I</text>
<text class="text" x="823px" y="1396px">.</text>
<text class="text" x="1064px" y="1396px">.</text>
<text class="text" x="1080px" y="1396px">R</text>
<text class="text" x="1090px" y="1396px">S</text>
<text class="text" x="1100px" y="1396px">.</text>
<text class="text" x="1110px" y="1396px">P</text>
<text class="text" x="1120px" y="1396px">Q</text>
<text class="text" x="100px" y="1412px">.</text>
<text class="text" x="187px" y="1412px">U</text>
<text class="text" x="341px" y="1412px">.</text>
<text class="text" x="582px" y="1412px">R</text>
<text class="text" x="592px" y="1412px">P</text>
<text class="text" x="804px" y="1412px">I</text>
<text class="text" x="823px" y="1412px">.</text>
<text class="text" x="1064px" y="1412px">.</text>
<text class="text" x="1080px" y="1412px">R</text>
<text class="text" x="1090px" y="1412px">S</text>
<text class="text" x="1100px" y="1412px">.</text>
<text class="text" x="1110px" y="1412px">P</text>
<text class="text" x="1120px" y="1412px">Q</text>
<text class="text" x="100px" y="1428px">.</text>
<text class="text" x="187px" y="1428px">U</text>
<text class="text" x="341px" y="1428px">.</text>
<text class="text" x="582px" y="1428px">R</text>
<text class="text" x="592px" y="1428px">P</text>
<text class="text" x="804px" y="1428px">I</text>
<text class="text" x="823px" y="1428px">.</text>
<text class="text" x="1064px" y="1428px">.</text>
<text class="text" x="1080px" y="1428px">R</text>
<text class="text" x="1090px" y="1428px">S</text>
<text class="text" x="1100px" y="1428px">.</text>
<text class="text" x="1110px" y="1428px">P</text>
<text class="text" x="1120px" y="1428px">Q</text>
<text class="text" x="100px" y="1444px">.</text>
<text class="text" x="187px" y="1444px">U</text>
<text class="text" x="341px" y="1444px">.</text>
<text class="text" x="582px" y="1444px">R</text>
<text class="text" x="592px" y="1444px">P</text>
<text class="text" x="804px" y="1444px">I</text>
<text class="text" x="823px" y="1444px">.</text>
<text class="text" x="1064px" y="1444px">.</text>
<text class="text" x="1080px" y="1444px">R</text>
<text class="text" x="1090px" y="1444px">S</text>
<text class="text" x="1100px" y="1444px">.</text>
<text class="text" x="1110px" y="1444px">P</text>
<text class="text" x="1120px" y="1444px">Q</text>
<text class="text" x="100px" y="1460px">.</text>
<text class="text" x="187px" y="1460px">U</text>
<text class="text" x="341px" y="1460px">.</text>
<text class="text" x="582px" y="1460px">R</text>
<text class="text" x="592px" y="1460px">P</text>
<text class="text" x="804px" y="1460px">I</text>
<text class="text" x="823px" y="1460px">.</text>
<text class="text" x="1064px" y="1460px">.</text>
<text class="text" x="1080px" y="1460px">R</text>
<text class="text" x="1090px" y="1460px">S</text>
<text class="text" x="1100px" y="1460px">.</text>
<text class="text" x="1110px" y="1460px">P</text>
<text class="text" x="1120px" y="1460px">Q</text>
<text class="text" x="100px" y="1476px">.</text>
<text class="text" x="187px" y="1476px">U</text>
<text class="text" x="341px" y="1476px">.</text>
<text class="text" x="582px" y="1476px">R</text>
<text class="text" x="592px" y="1476px">P</text>
<text class="text" x="804px" y="1476px">I</text>
<text class="text" x="823px" y="1476px">.</text>
<text class="text" x="1064px" y="1476px">.</text>
<text class="text" x="1080px" y="1476px">R</text>
<text class="text" x="1090px" y="1476px">S</text>
<text class="text" x="1100px" y="1476px">.</text>
<text class="text" x="1110px" y="1476px">P</text>
<text class="text" x="1120px" y="1476px">Q</text>
<text class="text" x="100px" y="1492px">.</text>
<text class="text" x="187px" y="1492px">U</text>
<text class="text" x="341px" y="1492px">.</text>
<text class="text" x="582px" y="1492px">R</text>
<text class="text" x="592px" y="1492px">Q</text>
<text class="text" x="804px" y="1492px">I</text>
<text class="text" x="823px" y="1492px">.</text>
<text class="text" x="1064px" y="1492px">.</text>
<text class="text" x="1080px" y="1492px">R</text>
<text class="text" x="1090px" y="1492px">S</text>
<text class="text" x="1100px" y="1492px">P</text>
<text class="text" x="100px" y="1508px">.</text>
<text class="text" x="187px" y="1508px">U</text>
<text class="text" x="341px" y="1508px">.</text>
<text class="text" x="582px" y="1508px">R</text>
<text class="text" x="592px" y="1508px">Q</text>
<text class="text" x="804px" y="1508px">I</text>
<text class="text" x="823px" y="1508px">.</text>
<text class="text" x="1064px" y="1508px">.</text>
<text class="text" x="1080px" y="1508px">R</text>
<text class="text" x="1090px" y="1508px">S</text>
<text class="text" x="1100px" y="1508px">P</text>
<text class="text" x="100px" y="1524px">.</text>
<text class="text" x="187px" y="1524px">U</text>
<text class="text" x="341px" y="1524px">.</text>
<text class="text" x="582px" y="1524px">R</text>
<text class="text" x="592px" y="1524px">Q</text>
<text class="text" x="804px" y="1524px">I</text>
<text class="text" x="823px" y="1524px">.</text>
<text class="text" x="1064px" y="1524px">.</text>
<text class="text" x="1080px" y="1524px">R</text>
<text class="text" x="1090px" y="1524px">S</text>
<text class="text" x="1100px" y="1524px">P</text>
<text class="text" x="80px" y="1540px">45</text>
<text class="text" x="100px" y="1540px">&nbsp&nbsp- - - -U- - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="1540px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="1540px">RQ- - - - - - - - - - -I-&nbsp;</text>
<text class="text" x="823px" y="1540px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="1540px">.</text>
<text class="text" x="1080px" y="1540px">R</text>
<text class="text" x="1090px" y="1540px">S</text>
<text class="text" x="1100px" y="1540px">P</text>
<text class="text" x="100px" y="1556px">.</text>
<text class="text" x="187px" y="1556px">U</text>
<text class="text" x="341px" y="1556px">.</text>
<text class="text" x="582px" y="1556px">R</text>
<text class="text" x="804px" y="1556px">I</text>
<text class="text" x="823px" y="1556px">.</text>
<text class="text" x="1064px" y="1556px">.</text>
<text class="text" x="1080px" y="1556px">R</text>
<text class="text" x="1090px" y="1556px">S</text>
<text class="text" x="1100px" y="1556px">P</text>
<text class="text" x="1110px" y="1556px">Q</text>
<text class="text" x="100px" y="1572px">.</text>
<text class="text" x="187px" y="1572px">U</text>
<text class="text" x="341px" y="1572px">.</text>
<text class="text" x="582px" y="1572px">R</text>
<text class="text" x="804px" y="1572px">I</text>
<text class="text" x="823px" y="1572px">.</text>
<text class="text" x="1064px" y="1572px">.</text>
<text class="text" x="1080px" y="1572px">R</text>
<text class="text" x="1090px" y="1572px">S</text>
<text class="text" x="1100px" y="1572px">P</text>
<text class="text" x="1110px" y="1572px">Q</text>
<text class="text" x="100px" y="1588px">.</text>
<text class="text" x="187px" y="1588px">U</text>
<text class="text" x="341px" y="1588px">.</text>
<text class="text" x="582px" y="1588px">R</text>
<text class="text" x="804px" y="1588px">I</text>
<text class="text" x="823px" y="1588px">.</text>
<text class="text" x="1064px" y="1588px">.</text>
<text class="text" x="1080px" y="1588px">R</text>
<text class="text" x="1090px" y="1588px">S</text>
<text class="text" x="1100px" y="1588px">P</text>
<text class="text" x="1110px" y="1588px">Q</text>
<text class="text" x="100px" y="1604px">.</text>
<text class="text" x="187px" y="1604px">U</text>
<text class="text" x="341px" y="1604px">.</text>
<text class="text" x="582px" y="1604px">R</text>
<text class="text" x="804px" y="1604px">I</text>
<text class="text" x="823px" y="1604px">.</text>
<text class="text" x="1064px" y="1604px">.</text>
<text class="text" x="1080px" y="1604px">R</text>
<text class="text" x="1090px" y="1604px">S</text>
<text class="text" x="1100px" y="1604px">P</text>
<text class="text" x="1110px" y="1604px">Q</text>
<text class="text" x="100px" y="1620px">.</text>
<text class="text" x="187px" y="1620px">U</text>
<text class="text" x="341px" y="1620px">.</text>
<text class="text" x="582px" y="1620px">R</text>
<text class="text" x="804px" y="1620px">I</text>
<text class="text" x="823px" y="1620px">.</text>
<text class="text" x="1064px" y="1620px">.</text>
<text class="text" x="1080px" y="1620px">R</text>
<text class="text" x="1090px" y="1620px">S</text>
<text class="text" x="1100px" y="1620px">P</text>
<text class="text" x="1110px" y="1620px">Q</text>
<text class="text" x="100px" y="1636px">.</text>
<text class="text" x="187px" y="1636px">U</text>
<text class="text" x="341px" y="1636px">.</text>
<text class="text" x="582px" y="1636px">R</text>
<text class="text" x="804px" y="1636px">I</text>
<text class="text" x="823px" y="1636px">.</text>
<text class="text" x="1064px" y="1636px">.</text>
<text class="text" x="1080px" y="1636px">R</text>
<text class="text" x="1090px" y="1636px">S</text>
<text class="text" x="1100px" y="1636px">P</text>
<text class="text" x="1110px" y="1636px">Q</text>
<text class="text" x="100px" y="1652px">.</text>
<text class="text" x="187px" y="1652px">U</text>
<text class="text" x="341px" y="1652px">.</text>
<text class="text" x="582px" y="1652px">R</text>
<text class="text" x="804px" y="1652px">I</text>
<text class="text" x="823px" y="1652px">.</text>
<text class="text" x="1064px" y="1652px">.</text>
<text class="text" x="1080px" y="1652px">R</text>
<text class="text" x="1090px" y="1652px">S</text>
<text class="text" x="1100px" y="1652px">P</text>
<text class="text" x="1110px" y="1652px">Q</text>
<text class="text" x="100px" y="1668px">.</text>
<text class="text" x="187px" y="1668px">U</text>
<text class="text" x="341px" y="1668px">.</text>
<text class="text" x="582px" y="1668px">R</text>
<text class="text" x="804px" y="1668px">I</text>
<text class="text" x="823px" y="1668px">.</text>
<text class="text" x="1064px" y="1668px">.</text>
<text class="text" x="1080px" y="1668px">R</text>
<text class="text" x="1090px" y="1668px">S</text>
<text class="text" x="1100px" y="1668px">P</text>
<text class="text" x="1110px" y="1668px">Q</text>
<text class="text" x="100px" y="1684px">.</text>
<text class="text" x="187px" y="1684px">U</text>
<text class="text" x="341px" y="1684px">.</text>
<text class="text" x="582px" y="1684px">R</text>
<text class="text" x="804px" y="1684px">I</text>
<text class="text" x="823px" y="1684px">.</text>
<text class="text" x="1064px" y="1684px">.</text>
<text class="text" x="1080px" y="1684px">R</text>
<text class="text" x="1090px" y="1684px">S</text>
<text class="text" x="1100px" y="1684px">P</text>
<text class="text" x="1110px" y="1684px">Q</text>
<text class="text" x="80px" y="1700px">50</text>
<text class="text" x="100px" y="1700px">&nbsp&nbsp- - - -U- - - - - - - -&nbsp;</text>
<text class="text" x="341px" y="1700px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="582px" y="1700px">R - - - - - - - - - - -I-&nbsp;</text>
<text class="text" x="823px" y="1700px">. - - - - - - - - - - - -&nbsp;</text>
<text class="text" x="1064px" y="1700px">.</text>
<text class="text" x="1080px" y="1700px">R</text>
<text class="text" x="1090px" y="1700px">S</text>
<text class="text" x="1100px" y="1700px">P</text>
<text class="text" x="1110px" y="1700px">Q</text>
<text class="text" x="60px" y="1732px">FINISHED RUNNING RUN NUMBER  2698JP AT 10/ 9 1629.6</text>
</g>
</svg>
<div class="dyna-caption">Figure 1-3 Plotted results of model.</div>
<div class="dyna-blankline">&nbsp;</div>
`

const page17text = `<div class="dyna-topline">
<span class="left-align">14</span>
<span class="right-align">primer</span>
</div>
<p class="dyna-p2"><span class="dyna-tab12">PLOT</span><span class="dyna-tab3">IAR=I,UOR=U/RRR=R,SSR=S,PSR=P,SRR=Q</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<ul class="dyna-list"><li>All the variables were plotted against TIME, without mentioning TIME on the PLOT card.</li>
<li>DYNAMO chose the scales so that none of the variables went off scale. Page 31 explains how the user can set his own scales.</li>
<li>Up to 10 variables may be plotted on a graph.</li>
<li>Variables that are to be plotted to the same scale are separated by commas on the PLOT card, while variables or groups of variables that are to have their own scales are separated by slashes.</li>
<li>Only one PLOT card (plus as many continuation cards as necessary) is used to specify the variables that are to be plotted on a graph, but more graphs may be obtained by using additional PLOT cards.</li>
<li>Variables may be either printed or plotted, or both.</li></ul>
<p class="dyna-p1"><span class="dyna-underline">Run Details</span></p>
<p class="dyna-p1">Three additional cards are necessary to complete the model. They are the run SPECifications card, the RUN number card, and the identification card.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">SPEC</span><span class="dyna-tab2">DT=0.1/LENGTH=50/PRTPER=2/PLTPER=0.5</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">This card sets DT equal to 1/10 week<sup> †</sup> and the length of the run equal to 50 weeks; it instructs DYNAMO to tabulate (print) the results every 2 weeks and plot them every half week. Note that only one unit of measure of time may be used in a model. Once we have started measuring time (including delays) in weeks, we must continue to do so throughout the model.</p>
<p class="dyna-p1">The RUN-number card provides DYNAMO with the number of this particular run. DYNAMO prints this number at the top of each page along with the page number. Any characters up to a total of six may be used. Each group of DYNAMO users will devise its own method of generating these numbers. For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">RUN</span><span class="dyna-tab3">2698JP</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The identification card provides the Computation Center with the information necessary to identify and run the deck:<sup> ‡</sup></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">*</span><span class="dyna-tab5">M478-248,DYN,TEST,1,1,0,0</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The asterisk denotes an identification card. M478-248 is the problem number and programmer's number (both are assigned by the Computation Center when the user requests computer time). DYN identifies the run as a DYNAMO run.  The word TEST (or the word RESULTS) establishes whether the model is</p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup>The choice of the size of DT is discussed here in Section 2.7 and in <span class="dyna-underline">Industrial Dynamics</span> in Appendix D.</p>
<p class="dyna-footnote"><sup>‡</sup>For the procedure at installations other than M.I.T., see page 27.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page18text = `<div class="dyna-topline">
<span class="left-align">card punching</span>
<span class="right-align">15</span>
</div>
<p class="dyna-p3">just being tested or whether results are expected which may be used in a report, thesis, or publication. The first figure following TEST is the number of minutes of computer time that the model is expected to take. Section 2.8 provides a formula to estimate this time. The second figure is the maximum number of minutes it should take, including all errors in estimating the time. This is the maximum time the Computation Center will allow the model to run before they will stop it. The final two zeros pertain to other programs but are required on all DYNAMO runs.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">1.5&nbsp;&nbsp;Card Punching</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Up to this point we have not mentioned the details of card punching, that is, where the information goes on the card. The word PRINT, PLOT, RUN, or SPEC starts in column 1. Similarly, the equation number starts in column 1 and is immediately followed by the letter corresponding to the quantity type. The C for a constant and the asterisk indicating the identification card also are punched in column 1. The information starts in column 7 and is punched without any intervening spaces.</p>
<p class="dyna-p1">The information may not extend beyond column 72. If more space is required, continuation cards must be used. These cards will not be discussed further here but are described on pages 25 and 26.</p>
<p class="dyna-p1">The space following the information indicates the end of the information, and thus is actually part of it. If there is no room on the card for this space, a continuation card must be provided to supply it.</p>
<p class="dyna-p1">Following the "final space," any sort of comment may be added. Such comments are helpful in remembering what a variable stands for and, in the case of constants, the units of the numerical value. It is easier to read these comments if they all start in the same column.</p>
<div class="dyna-shortblank">&nbsp;</div>


<p class="dyna-p2">

<svg class="svg-test" viewBox="-5 -5 4005 1768" xmlns="http://www.w3.org/2000/svg">
<style>
  .path1 { fill: none; stroke: black; stroke-width: 5; }
  .path2 { fill: none; stroke: black; stroke-width: 3; }
  .text1 { font-family: 'Devant Pro', monospace; font-size: 30px; }
  .text2 { font-family: 'Roboto Condensed', monospace; font-size: 50px; }
  .text3 { font-family: 'Courier New', Courier, monospace; font-size: 40px; }
  .text4 { font-family: 'DotMatrix', monospace; font-size: 56px; }
  .punch { fill: #081e02; }
</style>
    <path d="M3995,233 L3995,1643 A 115 115 90 0 1 3880,1758 L120,1758 A 115 115 90 0 1 5,1643 L5,120 A 115 115 90 0 1 120,5 L3858,5 L3995,233" class="path1" />
    <path d="M345,26 L345,1701 M398,1704 L398,22" class="path2" />
    <path d="M99,17 L99,1709 M153,1700 L153,1665 M153,1641 L153,1595 M153,1563 L153,1521 M153,1477 L153,1421 M153,1386 L153,1334 M153,1302 L153,1251 M153,1207 L153,1144 M153,1110 L153,1048 M153,1016 L153,953 M153,927 L153,857 M153,823 L153,758 M153,713 L153,653 M153,619 L153,579 M153,542 L153,494 M153,479 L153,431 M153,412 L153,369" class="path2" />
    <path d="M99,238 L345,238 M398,160 L3514,160 M99,369 L3914,369 M3514,22 L3514,1696 M3914,1705 L3914,107" class="path2" />
    <text x="124" y="75" class="text4">1</text>
    <path d="M128,519 L153,519 L153,583 L128,583 Z" class="punch" />
    <path d="M128,656 L153,656 L153,721 L128,721 Z" class="punch" />
    <text x="171" y="75" class="text4">A</text>
    <path d="M175,109 L200,109 L200,173 L175,173 Z" class="punch" />
    <path d="M175,519 L200,519 L200,583 L175,583 Z" class="punch" />
    <path d="M175,656 L200,656 L200,721 L175,721 Z" class="punch" />
    <text x="218" y="75" class="text4">A</text>
    <path d="M222,109 L247,109 L247,173 L222,173 Z" class="punch" />
    <path d="M222,519 L247,519 L247,583 L222,583 Z" class="punch" />
    <path d="M222,656 L247,656 L247,721 L222,721 Z" class="punch" />
    <text x="265" y="75" class="text4">A</text>
    <path d="M269,109 L294,109 L294,173 L269,173 Z" class="punch" />
    <path d="M269,519 L294,519 L294,583 L269,583 Z" class="punch" />
    <path d="M269,656 L294,656 L294,721 L269,721 Z" class="punch" />
    <text x="312" y="75" class="text4">A</text>
    <path d="M316,109 L341,109 L341,173 L316,173 Z" class="punch" />
    <path d="M316,519 L341,519 L341,583 L316,583 Z" class="punch" />
    <path d="M316,656 L341,656 L341,721 L316,721 Z" class="punch" />
    <text x="360" y="75" class="text4">A</text>
    <path d="M365,109 L390,109 L390,173 L365,173 Z" class="punch" />
    <path d="M365,519 L390,519 L390,583 L365,583 Z" class="punch" />
    <path d="M365,656 L390,656 L390,721 L365,721 Z" class="punch" />
    <text x="407" y="75" class="text4">1</text>
    <path d="M411,519 L436,519 L436,583 L411,583 Z" class="punch" />
    <path d="M411,656 L436,656 L436,721 L411,721 Z" class="punch" />
    <text x="454" y="75" class="text4">A</text>
    <path d="M459,109 L484,109 L484,173 L459,173 Z" class="punch" />
    <path d="M459,519 L484,519 L484,583 L459,583 Z" class="punch" />
    <path d="M459,656 L484,656 L484,721 L459,721 Z" class="punch" />
    <text x="501" y="75" class="text4">A</text>
    <path d="M505,109 L530,109 L530,173 L505,173 Z" class="punch" />
    <path d="M505,519 L530,519 L530,583 L505,583 Z" class="punch" />
    <path d="M505,656 L530,656 L530,721 L505,721 Z" class="punch" />
    <text x="548" y="75" class="text4">A</text>
    <path d="M552,109 L577,109 L577,173 L552,173 Z" class="punch" />
    <path d="M552,519 L577,519 L577,583 L552,583 Z" class="punch" />
    <path d="M552,656 L577,656 L577,721 L552,721 Z" class="punch" />
    <text x="595" y="75" class="text4">A</text>
    <path d="M599,109 L624,109 L624,173 L599,173 Z" class="punch" />
    <path d="M599,519 L624,519 L624,583 L599,583 Z" class="punch" />
    <path d="M599,656 L624,656 L624,721 L599,721 Z" class="punch" />
    <text x="643" y="75" class="text4">A</text>
    <path d="M647,109 L672,109 L672,173 L647,173 Z" class="punch" />
    <path d="M647,519 L672,519 L672,583 L647,583 Z" class="punch" />
    <path d="M647,656 L672,656 L672,721 L647,721 Z" class="punch" />
    <text x="690" y="75" class="text4">A</text>
    <path d="M694,109 L719,109 L719,173 L694,173 Z" class="punch" />
    <path d="M694,519 L719,519 L719,583 L694,583 Z" class="punch" />
    <path d="M694,656 L719,656 L719,721 L694,721 Z" class="punch" />
    <text x="737" y="75" class="text4">A</text>
    <path d="M741,109 L766,109 L766,173 L741,173 Z" class="punch" />
    <path d="M741,519 L766,519 L766,583 L741,583 Z" class="punch" />
    <path d="M741,656 L766,656 L766,721 L741,721 Z" class="punch" />
    <text x="784" y="75" class="text4">A</text>
    <path d="M788,109 L813,109 L813,173 L788,173 Z" class="punch" />
    <path d="M788,519 L813,519 L813,583 L788,583 Z" class="punch" />
    <path d="M788,656 L813,656 L813,721 L788,721 Z" class="punch" />
    <text x="831" y="75" class="text4">A</text>
    <path d="M835,109 L860,109 L860,173 L835,173 Z" class="punch" />
    <path d="M835,519 L860,519 L860,583 L835,583 Z" class="punch" />
    <path d="M835,656 L860,656 L860,721 L835,721 Z" class="punch" />
    <text x="878" y="75" class="text4">A</text>
    <path d="M882,109 L907,109 L907,173 L882,173 Z" class="punch" />
    <path d="M882,519 L907,519 L907,583 L882,583 Z" class="punch" />
    <path d="M882,656 L907,656 L907,721 L882,721 Z" class="punch" />
    <text x="926" y="75" class="text4">A</text>
    <path d="M930,109 L955,109 L955,173 L930,173 Z" class="punch" />
    <path d="M930,519 L955,519 L955,583 L930,583 Z" class="punch" />
    <path d="M930,656 L955,656 L955,721 L930,721 Z" class="punch" />
    <text x="973" y="75" class="text4">A</text>
    <path d="M977,109 L1002,109 L1002,173 L977,173 Z" class="punch" />
    <path d="M977,519 L1002,519 L1002,583 L977,583 Z" class="punch" />
    <path d="M977,656 L1002,656 L1002,721 L977,721 Z" class="punch" />
    <text x="1020" y="75" class="text4">A</text>
    <path d="M1024,109 L1049,109 L1049,173 L1024,173 Z" class="punch" />
    <path d="M1024,519 L1049,519 L1049,583 L1024,583 Z" class="punch" />
    <path d="M1024,656 L1049,656 L1049,721 L1024,721 Z" class="punch" />
    <text x="1067" y="75" class="text4">A</text>
    <path d="M1071,109 L1096,109 L1096,173 L1071,173 Z" class="punch" />
    <path d="M1071,519 L1096,519 L1096,583 L1071,583 Z" class="punch" />
    <path d="M1071,656 L1096,656 L1096,721 L1071,721 Z" class="punch" />
    <text x="1114" y="75" class="text4">A</text>
    <path d="M1118,109 L1143,109 L1143,173 L1118,173 Z" class="punch" />
    <path d="M1118,519 L1143,519 L1143,583 L1118,583 Z" class="punch" />
    <path d="M1118,656 L1143,656 L1143,721 L1118,721 Z" class="punch" />
    <text x="1161" y="75" class="text4">A</text>
    <path d="M1165,109 L1190,109 L1190,173 L1165,173 Z" class="punch" />
    <path d="M1165,519 L1190,519 L1190,583 L1165,583 Z" class="punch" />
    <path d="M1165,656 L1190,656 L1190,721 L1165,721 Z" class="punch" />
    <text x="1209" y="75" class="text4">A</text>
    <path d="M1213,109 L1238,109 L1238,173 L1213,173 Z" class="punch" />
    <path d="M1213,519 L1238,519 L1238,583 L1213,583 Z" class="punch" />
    <path d="M1213,656 L1238,656 L1238,721 L1213,721 Z" class="punch" />
    <text x="1256" y="75" class="text4">A</text>
    <path d="M1260,109 L1285,109 L1285,173 L1260,173 Z" class="punch" />
    <path d="M1260,519 L1285,519 L1285,583 L1260,583 Z" class="punch" />
    <path d="M1260,656 L1285,656 L1285,721 L1260,721 Z" class="punch" />
    <text x="1303" y="75" class="text4">A</text>
    <path d="M1307,109 L1332,109 L1332,173 L1307,173 Z" class="punch" />
    <path d="M1307,519 L1332,519 L1332,583 L1307,583 Z" class="punch" />
    <path d="M1307,656 L1332,656 L1332,721 L1307,721 Z" class="punch" />
    <text x="1350" y="75" class="text4">A</text>
    <path d="M1354,109 L1379,109 L1379,173 L1354,173 Z" class="punch" />
    <path d="M1354,519 L1379,519 L1379,583 L1354,583 Z" class="punch" />
    <path d="M1354,656 L1379,656 L1379,721 L1354,721 Z" class="punch" />
    <text x="1397" y="75" class="text4">A</text>
    <path d="M1401,109 L1426,109 L1426,173 L1401,173 Z" class="punch" />
    <path d="M1401,519 L1426,519 L1426,583 L1401,583 Z" class="punch" />
    <path d="M1401,656 L1426,656 L1426,721 L1401,721 Z" class="punch" />
    <text x="1444" y="75" class="text4">A</text>
    <path d="M1448,109 L1473,109 L1473,173 L1448,173 Z" class="punch" />
    <path d="M1448,519 L1473,519 L1473,583 L1448,583 Z" class="punch" />
    <path d="M1448,656 L1473,656 L1473,721 L1448,721 Z" class="punch" />
    <text x="1492" y="75" class="text4">A</text>
    <path d="M1496,109 L1521,109 L1521,173 L1496,173 Z" class="punch" />
    <path d="M1496,519 L1521,519 L1521,583 L1496,583 Z" class="punch" />
    <path d="M1496,656 L1521,656 L1521,721 L1496,721 Z" class="punch" />
    <text x="1539" y="75" class="text4">A</text>
    <path d="M1543,109 L1568,109 L1568,173 L1543,173 Z" class="punch" />
    <path d="M1543,519 L1568,519 L1568,583 L1543,583 Z" class="punch" />
    <path d="M1543,656 L1568,656 L1568,721 L1543,721 Z" class="punch" />
    <text x="1586" y="75" class="text4">A</text>
    <path d="M1590,109 L1615,109 L1615,173 L1590,173 Z" class="punch" />
    <path d="M1590,519 L1615,519 L1615,583 L1590,583 Z" class="punch" />
    <path d="M1590,656 L1615,656 L1615,721 L1590,721 Z" class="punch" />
    <text x="1633" y="75" class="text4">A</text>
    <path d="M1637,109 L1662,109 L1662,173 L1637,173 Z" class="punch" />
    <path d="M1637,519 L1662,519 L1662,583 L1637,583 Z" class="punch" />
    <path d="M1637,656 L1662,656 L1662,721 L1637,721 Z" class="punch" />
    <text x="1680" y="75" class="text4">A</text>
    <path d="M1684,109 L1709,109 L1709,173 L1684,173 Z" class="punch" />
    <path d="M1684,519 L1709,519 L1709,583 L1684,583 Z" class="punch" />
    <path d="M1684,656 L1709,656 L1709,721 L1684,721 Z" class="punch" />
    <text x="1728" y="75" class="text4">A</text>
    <path d="M1732,109 L1757,109 L1757,173 L1732,173 Z" class="punch" />
    <path d="M1732,519 L1757,519 L1757,583 L1732,583 Z" class="punch" />
    <path d="M1732,656 L1757,656 L1757,721 L1732,721 Z" class="punch" />
    <text x="1775" y="75" class="text4">A</text>
    <path d="M1779,109 L1804,109 L1804,173 L1779,173 Z" class="punch" />
    <path d="M1779,519 L1804,519 L1804,583 L1779,583 Z" class="punch" />
    <path d="M1779,656 L1804,656 L1804,721 L1779,721 Z" class="punch" />
    <text x="1822" y="75" class="text4">A</text>
    <path d="M1826,109 L1851,109 L1851,173 L1826,173 Z" class="punch" />
    <path d="M1826,519 L1851,519 L1851,583 L1826,583 Z" class="punch" />
    <path d="M1826,656 L1851,656 L1851,721 L1826,721 Z" class="punch" />
    <text x="1869" y="75" class="text4">A</text>
    <path d="M1873,109 L1898,109 L1898,173 L1873,173 Z" class="punch" />
    <path d="M1873,519 L1898,519 L1898,583 L1873,583 Z" class="punch" />
    <path d="M1873,656 L1898,656 L1898,721 L1873,721 Z" class="punch" />
    <text x="1916" y="75" class="text4">A</text>
    <path d="M1920,109 L1945,109 L1945,173 L1920,173 Z" class="punch" />
    <path d="M1920,519 L1945,519 L1945,583 L1920,583 Z" class="punch" />
    <path d="M1920,656 L1945,656 L1945,721 L1920,721 Z" class="punch" />
    <text x="1963" y="75" class="text4">A</text>
    <path d="M1967,109 L1992,109 L1992,173 L1967,173 Z" class="punch" />
    <path d="M1967,519 L1992,519 L1992,583 L1967,583 Z" class="punch" />
    <path d="M1967,656 L1992,656 L1992,721 L1967,721 Z" class="punch" />
    <text x="2010" y="75" class="text4">A</text>
    <path d="M2014,109 L2039,109 L2039,173 L2014,173 Z" class="punch" />
    <path d="M2014,519 L2039,519 L2039,583 L2014,583 Z" class="punch" />
    <path d="M2014,656 L2039,656 L2039,721 L2014,721 Z" class="punch" />
    <text x="2058" y="75" class="text4">A</text>
    <path d="M2062,109 L2087,109 L2087,173 L2062,173 Z" class="punch" />
    <path d="M2062,519 L2087,519 L2087,583 L2062,583 Z" class="punch" />
    <path d="M2062,656 L2087,656 L2087,721 L2062,721 Z" class="punch" />
    <text x="2105" y="75" class="text4">A</text>
    <path d="M2109,109 L2134,109 L2134,173 L2109,173 Z" class="punch" />
    <path d="M2109,519 L2134,519 L2134,583 L2109,583 Z" class="punch" />
    <path d="M2109,656 L2134,656 L2134,721 L2109,721 Z" class="punch" />
    <text x="2152" y="75" class="text4">A</text>
    <path d="M2156,109 L2181,109 L2181,173 L2156,173 Z" class="punch" />
    <path d="M2156,519 L2181,519 L2181,583 L2156,583 Z" class="punch" />
    <path d="M2156,656 L2181,656 L2181,721 L2156,721 Z" class="punch" />
    <text x="2199" y="75" class="text4">A</text>
    <path d="M2203,109 L2228,109 L2228,173 L2203,173 Z" class="punch" />
    <path d="M2203,519 L2228,519 L2228,583 L2203,583 Z" class="punch" />
    <path d="M2203,656 L2228,656 L2228,721 L2203,721 Z" class="punch" />
    <text x="2246" y="75" class="text4">A</text>
    <path d="M2250,109 L2275,109 L2275,173 L2250,173 Z" class="punch" />
    <path d="M2250,519 L2275,519 L2275,583 L2250,583 Z" class="punch" />
    <path d="M2250,656 L2275,656 L2275,721 L2250,721 Z" class="punch" />
    <text x="2294" y="75" class="text4">A</text>
    <path d="M2298,109 L2323,109 L2323,173 L2298,173 Z" class="punch" />
    <path d="M2298,519 L2323,519 L2323,583 L2298,583 Z" class="punch" />
    <path d="M2298,656 L2323,656 L2323,721 L2298,721 Z" class="punch" />
    <text x="2341" y="75" class="text4">A</text>
    <path d="M2345,109 L2370,109 L2370,173 L2345,173 Z" class="punch" />
    <path d="M2345,519 L2370,519 L2370,583 L2345,583 Z" class="punch" />
    <path d="M2345,656 L2370,656 L2370,721 L2345,721 Z" class="punch" />
    <text x="2388" y="75" class="text4">A</text>
    <path d="M2392,109 L2417,109 L2417,173 L2392,173 Z" class="punch" />
    <path d="M2392,519 L2417,519 L2417,583 L2392,583 Z" class="punch" />
    <path d="M2392,656 L2417,656 L2417,721 L2392,721 Z" class="punch" />
    <text x="2435" y="75" class="text4">1</text>
    <path d="M2439,519 L2464,519 L2464,583 L2439,583 Z" class="punch" />
    <path d="M2439,656 L2464,656 L2464,721 L2439,721 Z" class="punch" />
    <text x="2482" y="75" class="text4">A</text>
    <path d="M2486,109 L2511,109 L2511,173 L2486,173 Z" class="punch" />
    <path d="M2486,519 L2511,519 L2511,583 L2486,583 Z" class="punch" />
    <path d="M2486,656 L2511,656 L2511,721 L2486,721 Z" class="punch" />
    <text x="2529" y="75" class="text4">A</text>
    <path d="M2533,109 L2558,109 L2558,173 L2533,173 Z" class="punch" />
    <path d="M2533,519 L2558,519 L2558,583 L2533,583 Z" class="punch" />
    <path d="M2533,656 L2558,656 L2558,721 L2533,721 Z" class="punch" />
    <text x="2577" y="75" class="text4">A</text>
    <path d="M2581,109 L2606,109 L2606,173 L2581,173 Z" class="punch" />
    <path d="M2581,519 L2606,519 L2606,583 L2581,583 Z" class="punch" />
    <path d="M2581,656 L2606,656 L2606,721 L2581,721 Z" class="punch" />
    <text x="2624" y="75" class="text4">A</text>
    <path d="M2628,109 L2653,109 L2653,173 L2628,173 Z" class="punch" />
    <path d="M2628,519 L2653,519 L2653,583 L2628,583 Z" class="punch" />
    <path d="M2628,656 L2653,656 L2653,721 L2628,721 Z" class="punch" />
    <text x="2671" y="75" class="text4">A</text>
    <path d="M2675,109 L2700,109 L2700,173 L2675,173 Z" class="punch" />
    <path d="M2675,519 L2700,519 L2700,583 L2675,583 Z" class="punch" />
    <path d="M2675,656 L2700,656 L2700,721 L2675,721 Z" class="punch" />
    <text x="2718" y="75" class="text4">A</text>
    <path d="M2722,109 L2747,109 L2747,173 L2722,173 Z" class="punch" />
    <path d="M2722,519 L2747,519 L2747,583 L2722,583 Z" class="punch" />
    <path d="M2722,656 L2747,656 L2747,721 L2722,721 Z" class="punch" />
    <text x="2765" y="75" class="text4">A</text>
    <path d="M2769,109 L2794,109 L2794,173 L2769,173 Z" class="punch" />
    <path d="M2769,519 L2794,519 L2794,583 L2769,583 Z" class="punch" />
    <path d="M2769,656 L2794,656 L2794,721 L2769,721 Z" class="punch" />
    <text x="2812" y="75" class="text4">A</text>
    <path d="M2816,109 L2841,109 L2841,173 L2816,173 Z" class="punch" />
    <path d="M2816,519 L2841,519 L2841,583 L2816,583 Z" class="punch" />
    <path d="M2816,656 L2841,656 L2841,721 L2816,721 Z" class="punch" />
    <text x="2860" y="75" class="text4">A</text>
    <path d="M2864,109 L2889,109 L2889,173 L2864,173 Z" class="punch" />
    <path d="M2864,519 L2889,519 L2889,583 L2864,583 Z" class="punch" />
    <path d="M2864,656 L2889,656 L2889,721 L2864,721 Z" class="punch" />
    <text x="2907" y="75" class="text4">A</text>
    <path d="M2911,109 L2936,109 L2936,173 L2911,173 Z" class="punch" />
    <path d="M2911,519 L2936,519 L2936,583 L2911,583 Z" class="punch" />
    <path d="M2911,656 L2936,656 L2936,721 L2911,721 Z" class="punch" />
    <text x="2954" y="75" class="text4">A</text>
    <path d="M2958,109 L2983,109 L2983,173 L2958,173 Z" class="punch" />
    <path d="M2958,519 L2983,519 L2983,583 L2958,583 Z" class="punch" />
    <path d="M2958,656 L2983,656 L2983,721 L2958,721 Z" class="punch" />
    <text x="3001" y="75" class="text4">A</text>
    <path d="M3005,109 L3030,109 3030,173 L3005,173 Z" class="punch" />
    <path d="M3005,519 L3030,519 L3030,583 L3005,583 Z" class="punch" />
    <path d="M3005,656 L3030,656 L3030,721 L3005,721 Z" class="punch" />
    <text x="3048" y="75" class="text4">A</text>
    <path d="M3052,109 L3077,109 L3077,173 L3052,173 Z" class="punch" />
    <path d="M3052,519 L3077,519 L3077,583 L3052,583 Z" class="punch" />
    <path d="M3052,656 L3077,656 L3077,721 L3052,721 Z" class="punch" />
    <text x="3095" y="75" class="text4">A</text>
    <path d="M3099,109 L3124,109 L3124,173 L3099,173 Z" class="punch" />
    <path d="M3099,519 L3124,519 L3124,583 L3099,583 Z" class="punch" />
    <path d="M3099,656 L3124,656 L3124,721 L3099,721 Z" class="punch" />
    <text x="3143" y="75" class="text4">A</text>
    <path d="M3147,109 L3172,109 L3172,173 L3147,173 Z" class="punch" />
    <path d="M3147,519 L3172,519 L3172,583 L3147,583 Z" class="punch" />
    <path d="M3147,656 L3172,656 L3172,721 L3147,721 Z" class="punch" />
    <text x="3190" y="75" class="text4">A</text>
    <path d="M3194,109 L3219,109 L3219,173 L3194,173 Z" class="punch" />
    <path d="M3194,519 L3219,519 L3219,583 L3194,583 Z" class="punch" />
    <path d="M3194,656 L3219,656 L3219,721 L3194,721 Z" class="punch" />
    <text x="3237" y="75" class="text4">A</text>
    <path d="M3241,109 L3266,109 L3266,173 L3241,173 Z" class="punch" />
    <path d="M3241,519 L3266,519 L3266,583 L3241,583 Z" class="punch" />
    <path d="M3241,656 L3266,656 L3266,721 L3241,721 Z" class="punch" />
    <text x="3284" y="75" class="text4">A</text>
    <path d="M3288,109 L3313,109 L3313,173 L3288,173 Z" class="punch" />
    <path d="M3288,519 L3313,519 L3313,583 L3288,583 Z" class="punch" />
    <path d="M3288,656 L3313,656 L3313,721 L3288,721 Z" class="punch" />
    <text x="3331" y="75" class="text4">A</text>
    <path d="M3335,109 L3360,109 L3360,173 L3335,173 Z" class="punch" />
    <path d="M3335,519 L3360,519 L3360,583 L3335,583 Z" class="punch" />
    <path d="M3335,656 L3360,656 L3360,721 L3335,721 Z" class="punch" />
    <text x="3378" y="75" class="text4">A</text>
    <path d="M3382,109 L3407,109 L3407,173 L3382,173 Z" class="punch" />
    <path d="M3382,519 L3407,519 L3407,583 L3382,583 Z" class="punch" />
    <path d="M3382,656 L3407,656 L3407,721 L3382,721 Z" class="punch" />
    <text x="3426" y="75" class="text4">A</text>
    <path d="M3430,109 L3455,109 L3455,173 L3430,173 Z" class="punch" />
    <path d="M3430,519 L3455,519 L3455,583 L3430,583 Z" class="punch" />
    <path d="M3430,656 L3455,656 L3455,721 L3430,721 Z" class="punch" />
    <text x="3473" y="75" class="text4">A</text>
    <path d="M3477,109 L3502,109 L3502,173 L3477,173 Z" class="punch" />
    <path d="M3477,519 L3502,519 L3502,583 L3477,583 Z" class="punch" />
    <path d="M3477,656 L3502,656 L3502,721 L3477,721 Z" class="punch" />
    <text x="3520" y="75" class="text4">-</text>
    <path d="M3524,251 L3549,251 L3549,316 L3524,316 Z" class="punch" />
    <path d="M3524,656 L3549,656 L3549,721 L3524,721 Z" class="punch" />
    <text x="3567" y="75" class="text4">+</text>
    <path d="M3571,109 L3596,109 L3596,173 L3571,173 Z" class="punch" />
    <path d="M3571,656 L3596,656 L3596,721 L3571,721 Z" class="punch" />
    <text x="3614" y="75" class="text4">1</text>
    <path d="M3618,519 L3643,519 L3643,583 L3618,583 Z" class="punch" />
    <path d="M3618,656 L3643,656 L3643,721 L3618,721 Z" class="punch" />
    <text x="3661" y="75" class="text4">A</text>
    <path d="M3665,109 L3690,109 L3690,173 L3665,173 Z" class="punch" />
    <path d="M3665,519 L3690,519 L3690,583 L3665,583 Z" class="punch" />
    <path d="M3665,656 L3690,656 L3690,721 L3665,721 Z" class="punch" />
    <text x="3709" y="75" class="text4">A</text>
    <path d="M3713,109 L3738,109 L3738,173 L3713,173 Z" class="punch" />
    <path d="M3713,519 L3738,519 L3738,583 L3713,583 Z" class="punch" />
    <path d="M3713,656 L3738,656 L3738,721 L3713,721 Z" class="punch" />
    <text x="3756" y="75" class="text4">A</text>
    <path d="M3760,109 L3785,109 L3785,173 L3760,173 Z" class="punch" />
    <path d="M3760,519 L3785,519 L3785,583 L3760,583 Z" class="punch" />
    <path d="M3760,656 L3785,656 L3785,721 L3760,721 Z" class="punch" />
    <path d="M3807,656 L3832,656 L3832,721 L3807,721 Z" class="punch" />
    <text x="3850" y="75" class="text4">+</text>
    <path d="M3854,109 L3879,109 L3879,173 L3854,173 Z" class="punch" />
    <path d="M3854,656 L3879,656 L3879,721 L3854,721 Z" class="punch" />
    <text class="text2" x="124px" y="427px">0</text>
    <text class="text2" x="171px" y="427px">0</text>
    <text class="text2" x="218px" y="427px">0</text>
    <text class="text2" x="265px" y="427px">0</text>
    <text class="text2" x="312px" y="427px">0</text>
    <text class="text2" x="360px" y="427px">0</text>
    <text class="text2" x="407px" y="427px">0</text>
    <text class="text2" x="454px" y="427px">0</text>
    <text class="text2" x="501px" y="427px">0</text>
    <text class="text2" x="548px" y="427px">0</text>
    <text class="text2" x="595px" y="427px">0</text>
    <text class="text2" x="643px" y="427px">0</text>
    <text class="text2" x="690px" y="427px">0</text>
    <text class="text2" x="737px" y="427px">0</text>
    <text class="text2" x="784px" y="427px">0</text>
    <text class="text2" x="831px" y="427px">0</text>
    <text class="text2" x="878px" y="427px">0</text>
    <text class="text2" x="926px" y="427px">0</text>
    <text class="text2" x="973px" y="427px">0</text>
    <text class="text2" x="1020px" y="427px">0</text>
    <text class="text2" x="1067px" y="427px">0</text>
    <text class="text2" x="1114px" y="427px">0</text>
    <text class="text2" x="1161px" y="427px">0</text>
    <text class="text2" x="1209px" y="427px">0</text>
    <text class="text2" x="1256px" y="427px">0</text>
    <text class="text2" x="1303px" y="427px">0</text>
    <text class="text2" x="1350px" y="427px">0</text>
    <text class="text2" x="1397px" y="427px">0</text>
    <text class="text2" x="1444px" y="427px">0</text>
    <text class="text2" x="1492px" y="427px">0</text>
    <text class="text2" x="1539px" y="427px">0</text>
    <text class="text2" x="1586px" y="427px">0</text>
    <text class="text2" x="1633px" y="427px">0</text>
    <text class="text2" x="1680px" y="427px">0</text>
    <text class="text2" x="1728px" y="427px">0</text>
    <text class="text2" x="1775px" y="427px">0</text>
    <text class="text2" x="1822px" y="427px">0</text>
    <text class="text2" x="1869px" y="427px">0</text>
    <text class="text2" x="1916px" y="427px">0</text>
    <text class="text2" x="1963px" y="427px">0</text>
    <text class="text2" x="2010px" y="427px">0</text>
    <text class="text2" x="2058px" y="427px">0</text>
    <text class="text2" x="2105px" y="427px">0</text>
    <text class="text2" x="2152px" y="427px">0</text>
    <text class="text2" x="2199px" y="427px">0</text>
    <text class="text2" x="2246px" y="427px">0</text>
    <text class="text2" x="2294px" y="427px">0</text>
    <text class="text2" x="2341px" y="427px">0</text>
    <text class="text2" x="2388px" y="427px">0</text>
    <text class="text2" x="2435px" y="427px">0</text>
    <text class="text2" x="2482px" y="427px">0</text>
    <text class="text2" x="2529px" y="427px">0</text>
    <text class="text2" x="2577px" y="427px">0</text>
    <text class="text2" x="2624px" y="427px">0</text>
    <text class="text2" x="2671px" y="427px">0</text>
    <text class="text2" x="2718px" y="427px">0</text>
    <text class="text2" x="2765px" y="427px">0</text>
    <text class="text2" x="2812px" y="427px">0</text>
    <text class="text2" x="2860px" y="427px">0</text>
    <text class="text2" x="2907px" y="427px">0</text>
    <text class="text2" x="2954px" y="427px">0</text>
    <text class="text2" x="3001px" y="427px">0</text>
    <text class="text2" x="3048px" y="427px">0</text>
    <text class="text2" x="3095px" y="427px">0</text>
    <text class="text2" x="3143px" y="427px">0</text>
    <text class="text2" x="3190px" y="427px">0</text>
    <text class="text2" x="3237px" y="427px">0</text>
    <text class="text2" x="3284px" y="427px">0</text>
    <text class="text2" x="3331px" y="427px">0</text>
    <text class="text2" x="3378px" y="427px">0</text>
    <text class="text2" x="3426px" y="427px">0</text>
    <text class="text2" x="3473px" y="427px">0</text>
    <text class="text2" x="3520px" y="427px">0</text>
    <text class="text2" x="3567px" y="427px">0</text>
    <text class="text2" x="3614px" y="427px">0</text>
    <text class="text2" x="3661px" y="427px">0</text>
    <text class="text2" x="3709px" y="427px">0</text>
    <text class="text2" x="3756px" y="427px">0</text>
    <text class="text2" x="3803px" y="427px">0</text>
    <text class="text2" x="3850px" y="427px">0</text>
    <text class="text1" x="129px" y="488px">1</text>
    <text class="text1" x="176px" y="488px">2</text>
    <text class="text1" x="222px" y="488px">3</text>
    <text class="text1" x="268px" y="488px">4</text>
    <text class="text1" x="317px" y="488px">5</text>
    <text class="text1" x="363px" y="488px">6</text>
    <text class="text1" x="411px" y="488px">7</text>
    <text class="text1" x="456px" y="488px">8</text>
    <text class="text1" x="505px" y="488px">9</text>
    <text class="text1" x="540px" y="488px">10</text>
    <text class="text1" x="589px" y="488px">11</text>
    <text class="text1" x="638px" y="488px">12</text>
    <text class="text1" x="684px" y="488px">13</text>
    <text class="text1" x="731px" y="488px">14</text>
    <text class="text1" x="777px" y="488px">15</text>
    <text class="text1" x="824px" y="488px">16</text>
    <text class="text1" x="871px" y="488px">17</text>
    <text class="text1" x="918px" y="488px">18</text>
    <text class="text1" x="966px" y="488px">19</text>
    <text class="text1" x="1016px" y="488px">20</text>
    <text class="text1" x="1062px" y="488px">21</text>
    <text class="text1" x="1108px" y="488px">22</text>
    <text class="text1" x="1156px" y="488px">23</text>
    <text class="text1" x="1204px" y="488px">24</text>
    <text class="text1" x="1250px" y="488px">25</text>
    <text class="text1" x="1299px" y="488px">26</text>
    <text class="text1" x="1345px" y="488px">27</text>
    <text class="text1" x="1391px" y="488px">28</text>
    <text class="text1" x="1438px" y="488px">29</text>
    <text class="text1" x="1486px" y="488px">30</text>
    <text class="text1" x="1535px" y="488px">31</text>
    <text class="text1" x="1581px" y="488px">32</text>
    <text class="text1" x="1627px" y="488px">33</text>
    <text class="text1" x="1675px" y="488px">34</text>
    <text class="text1" x="1723px" y="488px">35</text>
    <text class="text1" x="1769px" y="488px">36</text>
    <text class="text1" x="1817px" y="488px">37</text>
    <text class="text1" x="1864px" y="488px">38</text>
    <text class="text1" x="1911px" y="488px">39</text>
    <text class="text1" x="1957px" y="488px">40</text>
    <text class="text1" x="2006px" y="488px">41</text>
    <text class="text1" x="2052px" y="488px">42</text>
    <text class="text1" x="2099px" y="488px">43</text>
    <text class="text1" x="2146px" y="488px">44</text>
    <text class="text1" x="2194px" y="488px">45</text>
    <text class="text1" x="2240px" y="488px">46</text>
    <text class="text1" x="2287px" y="488px">47</text>
    <text class="text1" x="2335px" y="488px">48</text>
    <text class="text1" x="2382px" y="488px">49</text>
    <text class="text1" x="2431px" y="488px">50</text>
    <text class="text1" x="2478px" y="488px">51</text>
    <text class="text1" x="2526px" y="488px">52</text>
    <text class="text1" x="2573px" y="488px">53</text>
    <text class="text1" x="2620px" y="488px">54</text>
    <text class="text1" x="2668px" y="488px">55</text>
    <text class="text1" x="2715px" y="488px">56</text>
    <text class="text1" x="2761px" y="488px">57</text>
    <text class="text1" x="2808px" y="488px">58</text>
    <text class="text1" x="2856px" y="488px">59</text>
    <text class="text1" x="2903px" y="488px">60</text>
    <text class="text1" x="2950px" y="488px">61</text>
    <text class="text1" x="2998px" y="488px">62</text>
    <text class="text1" x="3045px" y="488px">63</text>
    <text class="text1" x="3092px" y="488px">64</text>
    <text class="text1" x="3140px" y="488px">65</text>
    <text class="text1" x="3187px" y="488px">66</text>
    <text class="text1" x="3234px" y="488px">67</text>
    <text class="text1" x="3281px" y="488px">68</text>
    <text class="text1" x="3327px" y="488px">69</text>
    <text class="text1" x="3373px" y="488px">70</text>
    <text class="text1" x="3422px" y="488px">71</text>
    <text class="text1" x="3469px" y="488px">72</text>
    <text class="text1" x="3522px" y="488px">73</text>
    <text class="text1" x="3564px" y="488px">74</text>
    <text class="text1" x="3612px" y="488px">75</text>
    <text class="text1" x="3658px" y="488px">76</text>
    <text class="text1" x="3705px" y="488px">77</text>
    <text class="text1" x="3750px" y="488px">78</text>
    <text class="text1" x="3797px" y="488px">79</text>
    <text class="text1" x="3846px" y="488px">80</text>
    <text class="text2" x="3520px" y="563px">1</text>
    <text class="text2" x="3567px" y="563px">1</text>
    <text class="text2" x="3803px" y="563px">1</text>
    <text class="text2" x="3850px" y="563px">1</text>
    <text class="text2" y="837px" x="124px">3</text>
    <text class="text2" y="837px" x="171px">3</text>
    <text class="text2" y="837px" x="218px">3</text>
    <text class="text2" y="837px" x="265px">3</text>
    <text class="text2" y="837px" x="312px">3</text>
    <text class="text2" y="837px" x="360px">3</text>
    <text class="text2" y="837px" x="407px">3</text>
    <text class="text2" y="837px" x="454px">3</text>
    <text class="text2" y="837px" x="501px">3</text>
    <text class="text2" y="837px" x="548px">3</text>
    <text class="text2" y="837px" x="595px">3</text>
    <text class="text2" y="837px" x="643px">3</text>
    <text class="text2" y="837px" x="690px">3</text>
    <text class="text2" y="837px" x="737px">3</text>
    <text class="text2" y="837px" x="784px">3</text>
    <text class="text2" y="837px" x="831px">3</text>
    <text class="text2" y="837px" x="878px">3</text>
    <text class="text2" y="837px" x="926px">3</text>
    <text class="text2" y="837px" x="973px">3</text>
    <text class="text2" y="837px" x="1020px">3</text>
    <text class="text2" y="837px" x="1067px">3</text>
    <text class="text2" y="837px" x="1114px">3</text>
    <text class="text2" y="837px" x="1161px">3</text>
    <text class="text2" y="837px" x="1209px">3</text>
    <text class="text2" y="837px" x="1256px">3</text>
    <text class="text2" y="837px" x="1303px">3</text>
    <text class="text2" y="837px" x="1350px">3</text>
    <text class="text2" y="837px" x="1397px">3</text>
    <text class="text2" y="837px" x="1444px">3</text>
    <text class="text2" y="837px" x="1492px">3</text>
    <text class="text2" y="837px" x="1539px">3</text>
    <text class="text2" y="837px" x="1586px">3</text>
    <text class="text2" y="837px" x="1633px">3</text>
    <text class="text2" y="837px" x="1680px">3</text>
    <text class="text2" y="837px" x="1728px">3</text>
    <text class="text2" y="837px" x="1775px">3</text>
    <text class="text2" y="837px" x="1822px">3</text>
    <text class="text2" y="837px" x="1869px">3</text>
    <text class="text2" y="837px" x="1916px">3</text>
    <text class="text2" y="837px" x="1963px">3</text>
    <text class="text2" y="837px" x="2010px">3</text>
    <text class="text2" y="837px" x="2058px">3</text>
    <text class="text2" y="837px" x="2105px">3</text>
    <text class="text2" y="837px" x="2152px">3</text>
    <text class="text2" y="837px" x="2199px">3</text>
    <text class="text2" y="837px" x="2246px">3</text>
    <text class="text2" y="837px" x="2294px">3</text>
    <text class="text2" y="837px" x="2341px">3</text>
    <text class="text2" y="837px" x="2388px">3</text>
    <text class="text2" y="837px" x="2435px">3</text>
    <text class="text2" y="837px" x="2482px">3</text>
    <text class="text2" y="837px" x="2529px">3</text>
    <text class="text2" y="837px" x="2577px">3</text>
    <text class="text2" y="837px" x="2624px">3</text>
    <text class="text2" y="837px" x="2671px">3</text>
    <text class="text2" y="837px" x="2718px">3</text>
    <text class="text2" y="837px" x="2765px">3</text>
    <text class="text2" y="837px" x="2812px">3</text>
    <text class="text2" y="837px" x="2860px">3</text>
    <text class="text2" y="837px" x="2907px">3</text>
    <text class="text2" y="837px" x="2954px">3</text>
    <text class="text2" y="837px" x="3001px">3</text>
    <text class="text2" y="837px" x="3048px">3</text>
    <text class="text2" y="837px" x="3095px">3</text>
    <text class="text2" y="837px" x="3143px">3</text>
    <text class="text2" y="837px" x="3190px">3</text>
    <text class="text2" y="837px" x="3237px">3</text>
    <text class="text2" y="837px" x="3284px">3</text>
    <text class="text2" y="837px" x="3331px">3</text>
    <text class="text2" y="837px" x="3378px">3</text>
    <text class="text2" y="837px" x="3426px">3</text>
    <text class="text2" y="837px" x="3473px">3</text>
    <text class="text2" y="837px" x="3520px">3</text>
    <text class="text2" y="837px" x="3567px">3</text>
    <text class="text2" y="837px" x="3614px">3</text>
    <text class="text2" y="837px" x="3661px">3</text>
    <text class="text2" y="837px" x="3709px">3</text>
    <text class="text2" y="837px" x="3756px">3</text>
    <text class="text2" y="837px" x="3803px">3</text>
    <text class="text2" y="837px" x="3850px">3</text>
    <text class="text2" y="973px" x="124px">4</text>
    <text class="text2" y="973px" x="171px">4</text>
    <text class="text2" y="973px" x="218px">4</text>
    <text class="text2" y="973px" x="265px">4</text>
    <text class="text2" y="973px" x="312px">4</text>
    <text class="text2" y="973px" x="360px">4</text>
    <text class="text2" y="973px" x="407px">4</text>
    <text class="text2" y="973px" x="454px">4</text>
    <text class="text2" y="973px" x="501px">4</text>
    <text class="text2" y="973px" x="548px">4</text>
    <text class="text2" y="973px" x="595px">4</text>
    <text class="text2" y="973px" x="643px">4</text>
    <text class="text2" y="973px" x="690px">4</text>
    <text class="text2" y="973px" x="737px">4</text>
    <text class="text2" y="973px" x="784px">4</text>
    <text class="text2" y="973px" x="831px">4</text>
    <text class="text2" y="973px" x="878px">4</text>
    <text class="text2" y="973px" x="926px">4</text>
    <text class="text2" y="973px" x="973px">4</text>
    <text class="text2" y="973px" x="1020px">4</text>
    <text class="text2" y="973px" x="1067px">4</text>
    <text class="text2" y="973px" x="1114px">4</text>
    <text class="text2" y="973px" x="1161px">4</text>
    <text class="text2" y="973px" x="1209px">4</text>
    <text class="text2" y="973px" x="1256px">4</text>
    <text class="text2" y="973px" x="1303px">4</text>
    <text class="text2" y="973px" x="1350px">4</text>
    <text class="text2" y="973px" x="1397px">4</text>
    <text class="text2" y="973px" x="1444px">4</text>
    <text class="text2" y="973px" x="1492px">4</text>
    <text class="text2" y="973px" x="1539px">4</text>
    <text class="text2" y="973px" x="1586px">4</text>
    <text class="text2" y="973px" x="1633px">4</text>
    <text class="text2" y="973px" x="1680px">4</text>
    <text class="text2" y="973px" x="1728px">4</text>
    <text class="text2" y="973px" x="1775px">4</text>
    <text class="text2" y="973px" x="1822px">4</text>
    <text class="text2" y="973px" x="1869px">4</text>
    <text class="text2" y="973px" x="1916px">4</text>
    <text class="text2" y="973px" x="1963px">4</text>
    <text class="text2" y="973px" x="2010px">4</text>
    <text class="text2" y="973px" x="2058px">4</text>
    <text class="text2" y="973px" x="2105px">4</text>
    <text class="text2" y="973px" x="2152px">4</text>
    <text class="text2" y="973px" x="2199px">4</text>
    <text class="text2" y="973px" x="2246px">4</text>
    <text class="text2" y="973px" x="2294px">4</text>
    <text class="text2" y="973px" x="2341px">4</text>
    <text class="text2" y="973px" x="2388px">4</text>
    <text class="text2" y="973px" x="2435px">4</text>
    <text class="text2" y="973px" x="2482px">4</text>
    <text class="text2" y="973px" x="2529px">4</text>
    <text class="text2" y="973px" x="2577px">4</text>
    <text class="text2" y="973px" x="2624px">4</text>
    <text class="text2" y="973px" x="2671px">4</text>
    <text class="text2" y="973px" x="2718px">4</text>
    <text class="text2" y="973px" x="2765px">4</text>
    <text class="text2" y="973px" x="2812px">4</text>
    <text class="text2" y="973px" x="2860px">4</text>
    <text class="text2" y="973px" x="2907px">4</text>
    <text class="text2" y="973px" x="2954px">4</text>
    <text class="text2" y="973px" x="3001px">4</text>
    <text class="text2" y="973px" x="3048px">4</text>
    <text class="text2" y="973px" x="3095px">4</text>
    <text class="text2" y="973px" x="3143px">4</text>
    <text class="text2" y="973px" x="3190px">4</text>
    <text class="text2" y="973px" x="3237px">4</text>
    <text class="text2" y="973px" x="3284px">4</text>
    <text class="text2" y="973px" x="3331px">4</text>
    <text class="text2" y="973px" x="3378px">4</text>
    <text class="text2" y="973px" x="3426px">4</text>
    <text class="text2" y="973px" x="3473px">4</text>
    <text class="text2" y="973px" x="3520px">4</text>
    <text class="text2" y="973px" x="3567px">4</text>
    <text class="text2" y="973px" x="3614px">4</text>
    <text class="text2" y="973px" x="3661px">4</text>
    <text class="text2" y="973px" x="3709px">4</text>
    <text class="text2" y="973px" x="3756px">4</text>
    <text class="text2" y="973px" x="3803px">4</text>
    <text class="text2" y="973px" x="3850px">4</text>
    <text class="text2" x="124px" y="1110px">5</text>
    <text class="text2" x="171px" y="1110px">5</text>
    <text class="text2" x="218px" y="1110px">5</text>
    <text class="text2" x="265px" y="1110px">5</text>
    <text class="text2" x="312px" y="1110px">5</text>
    <text class="text2" x="360px" y="1110px">5</text>
    <text class="text2" x="407px" y="1110px">5</text>
    <text class="text2" x="454px" y="1110px">5</text>
    <text class="text2" x="501px" y="1110px">5</text>
    <text class="text2" x="548px" y="1110px">5</text>
    <text class="text2" x="595px" y="1110px">5</text>
    <text class="text2" x="643px" y="1110px">5</text>
    <text class="text2" x="690px" y="1110px">5</text>
    <text class="text2" x="737px" y="1110px">5</text>
    <text class="text2" x="784px" y="1110px">5</text>
    <text class="text2" x="831px" y="1110px">5</text>
    <text class="text2" x="878px" y="1110px">5</text>
    <text class="text2" x="926px" y="1110px">5</text>
    <text class="text2" x="973px" y="1110px">5</text>
    <text class="text2" x="1020px" y="1110px">5</text>
    <text class="text2" x="1067px" y="1110px">5</text>
    <text class="text2" x="1114px" y="1110px">5</text>
    <text class="text2" x="1161px" y="1110px">5</text>
    <text class="text2" x="1209px" y="1110px">5</text>
    <text class="text2" x="1256px" y="1110px">5</text>
    <text class="text2" x="1303px" y="1110px">5</text>
    <text class="text2" x="1350px" y="1110px">5</text>
    <text class="text2" x="1397px" y="1110px">5</text>
    <text class="text2" x="1444px" y="1110px">5</text>
    <text class="text2" x="1492px" y="1110px">5</text>
    <text class="text2" x="1539px" y="1110px">5</text>
    <text class="text2" x="1586px" y="1110px">5</text>
    <text class="text2" x="1633px" y="1110px">5</text>
    <text class="text2" x="1680px" y="1110px">5</text>
    <text class="text2" x="1728px" y="1110px">5</text>
    <text class="text2" x="1775px" y="1110px">5</text>
    <text class="text2" x="1822px" y="1110px">5</text>
    <text class="text2" x="1869px" y="1110px">5</text>
    <text class="text2" x="1916px" y="1110px">5</text>
    <text class="text2" x="1963px" y="1110px">5</text>
    <text class="text2" x="2010px" y="1110px">5</text>
    <text class="text2" x="2058px" y="1110px">5</text>
    <text class="text2" x="2105px" y="1110px">5</text>
    <text class="text2" x="2152px" y="1110px">5</text>
    <text class="text2" x="2199px" y="1110px">5</text>
    <text class="text2" x="2246px" y="1110px">5</text>
    <text class="text2" x="2294px" y="1110px">5</text>
    <text class="text2" x="2341px" y="1110px">5</text>
    <text class="text2" x="2388px" y="1110px">5</text>
    <text class="text2" x="2435px" y="1110px">5</text>
    <text class="text2" x="2482px" y="1110px">5</text>
    <text class="text2" x="2529px" y="1110px">5</text>
    <text class="text2" x="2577px" y="1110px">5</text>
    <text class="text2" x="2624px" y="1110px">5</text>
    <text class="text2" x="2671px" y="1110px">5</text>
    <text class="text2" x="2718px" y="1110px">5</text>
    <text class="text2" x="2765px" y="1110px">5</text>
    <text class="text2" x="2812px" y="1110px">5</text>
    <text class="text2" x="2860px" y="1110px">5</text>
    <text class="text2" x="2907px" y="1110px">5</text>
    <text class="text2" x="2954px" y="1110px">5</text>
    <text class="text2" x="3001px" y="1110px">5</text>
    <text class="text2" x="3048px" y="1110px">5</text>
    <text class="text2" x="3095px" y="1110px">5</text>
    <text class="text2" x="3143px" y="1110px">5</text>
    <text class="text2" x="3190px" y="1110px">5</text>
    <text class="text2" x="3237px" y="1110px">5</text>
    <text class="text2" x="3284px" y="1110px">5</text>
    <text class="text2" x="3331px" y="1110px">5</text>
    <text class="text2" x="3378px" y="1110px">5</text>
    <text class="text2" x="3426px" y="1110px">5</text>
    <text class="text2" x="3473px" y="1110px">5</text>
    <text class="text2" x="3520px" y="1110px">5</text>
    <text class="text2" x="3567px" y="1110px">5</text>
    <text class="text2" x="3614px" y="1110px">5</text>
    <text class="text2" x="3661px" y="1110px">5</text>
    <text class="text2" x="3709px" y="1110px">5</text>
    <text class="text2" x="3756px" y="1110px">5</text>
    <text class="text2" x="3803px" y="1110px">5</text>
    <text class="text2" x="3850px" y="1110px">5</text>
    <text class="text2" x="124px" y="1245px">6</text>
    <text class="text2" x="171px" y="1245px">6</text>
    <text class="text2" x="218px" y="1245px">6</text>
    <text class="text2" x="265px" y="1245px">6</text>
    <text class="text2" x="312px" y="1245px">6</text>
    <text class="text2" x="360px" y="1245px">6</text>
    <text class="text2" x="407px" y="1245px">6</text>
    <text class="text2" x="454px" y="1245px">6</text>
    <text class="text2" x="501px" y="1245px">6</text>
    <text class="text2" x="548px" y="1245px">6</text>
    <text class="text2" x="595px" y="1245px">6</text>
    <text class="text2" x="643px" y="1245px">6</text>
    <text class="text2" x="690px" y="1245px">6</text>
    <text class="text2" x="737px" y="1245px">6</text>
    <text class="text2" x="784px" y="1245px">6</text>
    <text class="text2" x="831px" y="1245px">6</text>
    <text class="text2" x="878px" y="1245px">6</text>
    <text class="text2" x="926px" y="1245px">6</text>
    <text class="text2" x="973px" y="1245px">6</text>
    <text class="text2" x="1020px" y="1245px">6</text>
    <text class="text2" x="1067px" y="1245px">6</text>
    <text class="text2" x="1114px" y="1245px">6</text>
    <text class="text2" x="1161px" y="1245px">6</text>
    <text class="text2" x="1209px" y="1245px">6</text>
    <text class="text2" x="1256px" y="1245px">6</text>
    <text class="text2" x="1303px" y="1245px">6</text>
    <text class="text2" x="1350px" y="1245px">6</text>
    <text class="text2" x="1397px" y="1245px">6</text>
    <text class="text2" x="1444px" y="1245px">6</text>
    <text class="text2" x="1492px" y="1245px">6</text>
    <text class="text2" x="1539px" y="1245px">6</text>
    <text class="text2" x="1586px" y="1245px">6</text>
    <text class="text2" x="1633px" y="1245px">6</text>
    <text class="text2" x="1680px" y="1245px">6</text>
    <text class="text2" x="1728px" y="1245px">6</text>
    <text class="text2" x="1775px" y="1245px">6</text>
    <text class="text2" x="1822px" y="1245px">6</text>
    <text class="text2" x="1869px" y="1245px">6</text>
    <text class="text2" x="1916px" y="1245px">6</text>
    <text class="text2" x="1963px" y="1245px">6</text>
    <text class="text2" x="2010px" y="1245px">6</text>
    <text class="text2" x="2058px" y="1245px">6</text>
    <text class="text2" x="2105px" y="1245px">6</text>
    <text class="text2" x="2152px" y="1245px">6</text>
    <text class="text2" x="2199px" y="1245px">6</text>
    <text class="text2" x="2246px" y="1245px">6</text>
    <text class="text2" x="2294px" y="1245px">6</text>
    <text class="text2" x="2341px" y="1245px">6</text>
    <text class="text2" x="2388px" y="1245px">6</text>
    <text class="text2" x="2435px" y="1245px">6</text>
    <text class="text2" x="2482px" y="1245px">6</text>
    <text class="text2" x="2529px" y="1245px">6</text>
    <text class="text2" x="2577px" y="1245px">6</text>
    <text class="text2" x="2624px" y="1245px">6</text>
    <text class="text2" x="2671px" y="1245px">6</text>
    <text class="text2" x="2718px" y="1245px">6</text>
    <text class="text2" x="2765px" y="1245px">6</text>
    <text class="text2" x="2812px" y="1245px">6</text>
    <text class="text2" x="2860px" y="1245px">6</text>
    <text class="text2" x="2907px" y="1245px">6</text>
    <text class="text2" x="2954px" y="1245px">6</text>
    <text class="text2" x="3001px" y="1245px">6</text>
    <text class="text2" x="3048px" y="1245px">6</text>
    <text class="text2" x="3095px" y="1245px">6</text>
    <text class="text2" x="3143px" y="1245px">6</text>
    <text class="text2" x="3190px" y="1245px">6</text>
    <text class="text2" x="3237px" y="1245px">6</text>
    <text class="text2" x="3284px" y="1245px">6</text>
    <text class="text2" x="3331px" y="1245px">6</text>
    <text class="text2" x="3378px" y="1245px">6</text>
    <text class="text2" x="3426px" y="1245px">6</text>
    <text class="text2" x="3473px" y="1245px">6</text>
    <text class="text2" x="3520px" y="1245px">6</text>
    <text class="text2" x="3567px" y="1245px">6</text>
    <text class="text2" x="3614px" y="1245px">6</text>
    <text class="text2" x="3661px" y="1245px">6</text>
    <text class="text2" x="3709px" y="1245px">6</text>
    <text class="text2" x="3756px" y="1245px">6</text>
    <text class="text2" x="3803px" y="1245px">6</text>
    <text class="text2" x="3850px" y="1245px">6</text>
    <text class="text2" x="124px" y="1383px">7</text>
    <text class="text2" x="171px" y="1383px">7</text>
    <text class="text2" x="218px" y="1383px">7</text>
    <text class="text2" x="265px" y="1383px">7</text>
    <text class="text2" x="312px" y="1383px">7</text>
    <text class="text2" x="360px" y="1383px">7</text>
    <text class="text2" x="407px" y="1383px">7</text>
    <text class="text2" x="454px" y="1383px">7</text>
    <text class="text2" x="501px" y="1383px">7</text>
    <text class="text2" x="548px" y="1383px">7</text>
    <text class="text2" x="595px" y="1383px">7</text>
    <text class="text2" x="643px" y="1383px">7</text>
    <text class="text2" x="690px" y="1383px">7</text>
    <text class="text2" x="737px" y="1383px">7</text>
    <text class="text2" x="784px" y="1383px">7</text>
    <text class="text2" x="831px" y="1383px">7</text>
    <text class="text2" x="878px" y="1383px">7</text>
    <text class="text2" x="926px" y="1383px">7</text>
    <text class="text2" x="973px" y="1383px">7</text>
    <text class="text2" x="1020px" y="1383px">7</text>
    <text class="text2" x="1067px" y="1383px">7</text>
    <text class="text2" x="1114px" y="1383px">7</text>
    <text class="text2" x="1161px" y="1383px">7</text>
    <text class="text2" x="1209px" y="1383px">7</text>
    <text class="text2" x="1256px" y="1383px">7</text>
    <text class="text2" x="1303px" y="1383px">7</text>
    <text class="text2" x="1350px" y="1383px">7</text>
    <text class="text2" x="1397px" y="1383px">7</text>
    <text class="text2" x="1444px" y="1383px">7</text>
    <text class="text2" x="1492px" y="1383px">7</text>
    <text class="text2" x="1539px" y="1383px">7</text>
    <text class="text2" x="1586px" y="1383px">7</text>
    <text class="text2" x="1633px" y="1383px">7</text>
    <text class="text2" x="1680px" y="1383px">7</text>
    <text class="text2" x="1728px" y="1383px">7</text>
    <text class="text2" x="1775px" y="1383px">7</text>
    <text class="text2" x="1822px" y="1383px">7</text>
    <text class="text2" x="1869px" y="1383px">7</text>
    <text class="text2" x="1916px" y="1383px">7</text>
    <text class="text2" x="1963px" y="1383px">7</text>
    <text class="text2" x="2010px" y="1383px">7</text>
    <text class="text2" x="2058px" y="1383px">7</text>
    <text class="text2" x="2105px" y="1383px">7</text>
    <text class="text2" x="2152px" y="1383px">7</text>
    <text class="text2" x="2199px" y="1383px">7</text>
    <text class="text2" x="2246px" y="1383px">7</text>
    <text class="text2" x="2294px" y="1383px">7</text>
    <text class="text2" x="2341px" y="1383px">7</text>
    <text class="text2" x="2388px" y="1383px">7</text>
    <text class="text2" x="2435px" y="1383px">7</text>
    <text class="text2" x="2482px" y="1383px">7</text>
    <text class="text2" x="2529px" y="1383px">7</text>
    <text class="text2" x="2577px" y="1383px">7</text>
    <text class="text2" x="2624px" y="1383px">7</text>
    <text class="text2" x="2671px" y="1383px">7</text>
    <text class="text2" x="2718px" y="1383px">7</text>
    <text class="text2" x="2765px" y="1383px">7</text>
    <text class="text2" x="2812px" y="1383px">7</text>
    <text class="text2" x="2860px" y="1383px">7</text>
    <text class="text2" x="2907px" y="1383px">7</text>
    <text class="text2" x="2954px" y="1383px">7</text>
    <text class="text2" x="3001px" y="1383px">7</text>
    <text class="text2" x="3048px" y="1383px">7</text>
    <text class="text2" x="3095px" y="1383px">7</text>
    <text class="text2" x="3143px" y="1383px">7</text>
    <text class="text2" x="3190px" y="1383px">7</text>
    <text class="text2" x="3237px" y="1383px">7</text>
    <text class="text2" x="3284px" y="1383px">7</text>
    <text class="text2" x="3331px" y="1383px">7</text>
    <text class="text2" x="3378px" y="1383px">7</text>
    <text class="text2" x="3426px" y="1383px">7</text>
    <text class="text2" x="3473px" y="1383px">7</text>
    <text class="text2" x="3520px" y="1383px">7</text>
    <text class="text2" x="3567px" y="1383px">7</text>
    <text class="text2" x="3614px" y="1383px">7</text>
    <text class="text2" x="3661px" y="1383px">7</text>
    <text class="text2" x="3709px" y="1383px">7</text>
    <text class="text2" x="3756px" y="1383px">7</text>
    <text class="text2" x="3803px" y="1383px">7</text>
    <text class="text2" x="3850px" y="1383px">7</text>
    <text class="text2" x="124px" y="1518px">8</text>
    <text class="text2" x="171px" y="1518px">8</text>
    <text class="text2" x="218px" y="1518px">8</text>
    <text class="text2" x="265px" y="1518px">8</text>
    <text class="text2" x="312px" y="1518px">8</text>
    <text class="text2" x="360px" y="1518px">8</text>
    <text class="text2" x="407px" y="1518px">8</text>
    <text class="text2" x="454px" y="1518px">8</text>
    <text class="text2" x="501px" y="1518px">8</text>
    <text class="text2" x="548px" y="1518px">8</text>
    <text class="text2" x="595px" y="1518px">8</text>
    <text class="text2" x="643px" y="1518px">8</text>
    <text class="text2" x="690px" y="1518px">8</text>
    <text class="text2" x="737px" y="1518px">8</text>
    <text class="text2" x="784px" y="1518px">8</text>
    <text class="text2" x="831px" y="1518px">8</text>
    <text class="text2" x="878px" y="1518px">8</text>
    <text class="text2" x="926px" y="1518px">8</text>
    <text class="text2" x="973px" y="1518px">8</text>
    <text class="text2" x="1020px" y="1518px">8</text>
    <text class="text2" x="1067px" y="1518px">8</text>
    <text class="text2" x="1114px" y="1518px">8</text>
    <text class="text2" x="1161px" y="1518px">8</text>
    <text class="text2" x="1209px" y="1518px">8</text>
    <text class="text2" x="1256px" y="1518px">8</text>
    <text class="text2" x="1303px" y="1518px">8</text>
    <text class="text2" x="1350px" y="1518px">8</text>
    <text class="text2" x="1397px" y="1518px">8</text>
    <text class="text2" x="1444px" y="1518px">8</text>
    <text class="text2" x="1492px" y="1518px">8</text>
    <text class="text2" x="1539px" y="1518px">8</text>
    <text class="text2" x="1586px" y="1518px">8</text>
    <text class="text2" x="1633px" y="1518px">8</text>
    <text class="text2" x="1680px" y="1518px">8</text>
    <text class="text2" x="1728px" y="1518px">8</text>
    <text class="text2" x="1775px" y="1518px">8</text>
    <text class="text2" x="1822px" y="1518px">8</text>
    <text class="text2" x="1869px" y="1518px">8</text>
    <text class="text2" x="1916px" y="1518px">8</text>
    <text class="text2" x="1963px" y="1518px">8</text>
    <text class="text2" x="2010px" y="1518px">8</text>
    <text class="text2" x="2058px" y="1518px">8</text>
    <text class="text2" x="2105px" y="1518px">8</text>
    <text class="text2" x="2152px" y="1518px">8</text>
    <text class="text2" x="2199px" y="1518px">8</text>
    <text class="text2" x="2246px" y="1518px">8</text>
    <text class="text2" x="2294px" y="1518px">8</text>
    <text class="text2" x="2341px" y="1518px">8</text>
    <text class="text2" x="2388px" y="1518px">8</text>
    <text class="text2" x="2435px" y="1518px">8</text>
    <text class="text2" x="2482px" y="1518px">8</text>
    <text class="text2" x="2529px" y="1518px">8</text>
    <text class="text2" x="2577px" y="1518px">8</text>
    <text class="text2" x="2624px" y="1518px">8</text>
    <text class="text2" x="2671px" y="1518px">8</text>
    <text class="text2" x="2718px" y="1518px">8</text>
    <text class="text2" x="2765px" y="1518px">8</text>
    <text class="text2" x="2812px" y="1518px">8</text>
    <text class="text2" x="2860px" y="1518px">8</text>
    <text class="text2" x="2907px" y="1518px">8</text>
    <text class="text2" x="2954px" y="1518px">8</text>
    <text class="text2" x="3001px" y="1518px">8</text>
    <text class="text2" x="3048px" y="1518px">8</text>
    <text class="text2" x="3095px" y="1518px">8</text>
    <text class="text2" x="3143px" y="1518px">8</text>
    <text class="text2" x="3190px" y="1518px">8</text>
    <text class="text2" x="3237px" y="1518px">8</text>
    <text class="text2" x="3284px" y="1518px">8</text>
    <text class="text2" x="3331px" y="1518px">8</text>
    <text class="text2" x="3378px" y="1518px">8</text>
    <text class="text2" x="3426px" y="1518px">8</text>
    <text class="text2" x="3473px" y="1518px">8</text>
    <text class="text2" x="3520px" y="1518px">8</text>
    <text class="text2" x="3567px" y="1518px">8</text>
    <text class="text2" x="3614px" y="1518px">8</text>
    <text class="text2" x="3661px" y="1518px">8</text>
    <text class="text2" x="3709px" y="1518px">8</text>
    <text class="text2" x="3756px" y="1518px">8</text>
    <text class="text2" x="3803px" y="1518px">8</text>
    <text class="text2" x="3850px" y="1518px">8</text>
    <text class="text2" x="124px" y="1653px">9</text>
    <text class="text2" x="171px" y="1653px">9</text>
    <text class="text2" x="218px" y="1653px">9</text>
    <text class="text2" x="265px" y="1653px">9</text>
    <text class="text2" x="312px" y="1653px">9</text>
    <text class="text2" x="360px" y="1653px">9</text>
    <text class="text2" x="407px" y="1653px">9</text>
    <text class="text2" x="454px" y="1653px">9</text>
    <text class="text2" x="501px" y="1653px">9</text>
    <text class="text2" x="548px" y="1653px">9</text>
    <text class="text2" x="595px" y="1653px">9</text>
    <text class="text2" x="643px" y="1653px">9</text>
    <text class="text2" x="690px" y="1653px">9</text>
    <text class="text2" x="737px" y="1653px">9</text>
    <text class="text2" x="784px" y="1653px">9</text>
    <text class="text2" x="831px" y="1653px">9</text>
    <text class="text2" x="878px" y="1653px">9</text>
    <text class="text2" x="926px" y="1653px">9</text>
    <text class="text2" x="973px" y="1653px">9</text>
    <text class="text2" x="1020px" y="1653px">9</text>
    <text class="text2" x="1067px" y="1653px">9</text>
    <text class="text2" x="1114px" y="1653px">9</text>
    <text class="text2" x="1161px" y="1653px">9</text>
    <text class="text2" x="1209px" y="1653px">9</text>
    <text class="text2" x="1256px" y="1653px">9</text>
    <text class="text2" x="1303px" y="1653px">9</text>
    <text class="text2" x="1350px" y="1653px">9</text>
    <text class="text2" x="1397px" y="1653px">9</text>
    <text class="text2" x="1444px" y="1653px">9</text>
    <text class="text2" x="1492px" y="1653px">9</text>
    <text class="text2" x="1539px" y="1653px">9</text>
    <text class="text2" x="1586px" y="1653px">9</text>
    <text class="text2" x="1633px" y="1653px">9</text>
    <text class="text2" x="1680px" y="1653px">9</text>
    <text class="text2" x="1728px" y="1653px">9</text>
    <text class="text2" x="1775px" y="1653px">9</text>
    <text class="text2" x="1822px" y="1653px">9</text>
    <text class="text2" x="1869px" y="1653px">9</text>
    <text class="text2" x="1916px" y="1653px">9</text>
    <text class="text2" x="1963px" y="1653px">9</text>
    <text class="text2" x="2010px" y="1653px">9</text>
    <text class="text2" x="2058px" y="1653px">9</text>
    <text class="text2" x="2105px" y="1653px">9</text>
    <text class="text2" x="2152px" y="1653px">9</text>
    <text class="text2" x="2199px" y="1653px">9</text>
    <text class="text2" x="2246px" y="1653px">9</text>
    <text class="text2" x="2294px" y="1653px">9</text>
    <text class="text2" x="2341px" y="1653px">9</text>
    <text class="text2" x="2388px" y="1653px">9</text>
    <text class="text2" x="2435px" y="1653px">9</text>
    <text class="text2" x="2482px" y="1653px">9</text>
    <text class="text2" x="2529px" y="1653px">9</text>
    <text class="text2" x="2577px" y="1653px">9</text>
    <text class="text2" x="2624px" y="1653px">9</text>
    <text class="text2" x="2671px" y="1653px">9</text>
    <text class="text2" x="2718px" y="1653px">9</text>
    <text class="text2" x="2765px" y="1653px">9</text>
    <text class="text2" x="2812px" y="1653px">9</text>
    <text class="text2" x="2860px" y="1653px">9</text>
    <text class="text2" x="2907px" y="1653px">9</text>
    <text class="text2" x="2954px" y="1653px">9</text>
    <text class="text2" x="3001px" y="1653px">9</text>
    <text class="text2" x="3048px" y="1653px">9</text>
    <text class="text2" x="3095px" y="1653px">9</text>
    <text class="text2" x="3143px" y="1653px">9</text>
    <text class="text2" x="3190px" y="1653px">9</text>
    <text class="text2" x="3237px" y="1653px">9</text>
    <text class="text2" x="3284px" y="1653px">9</text>
    <text class="text2" x="3331px" y="1653px">9</text>
    <text class="text2" x="3378px" y="1653px">9</text>
    <text class="text2" x="3426px" y="1653px">9</text>
    <text class="text2" x="3473px" y="1653px">9</text>
    <text class="text2" x="3520px" y="1653px">9</text>
    <text class="text2" x="3567px" y="1653px">9</text>
    <text class="text2" x="3614px" y="1653px">9</text>
    <text class="text2" x="3661px" y="1653px">9</text>
    <text class="text2" x="3709px" y="1653px">9</text>
    <text class="text2" x="3756px" y="1653px">9</text>
    <text class="text2" x="3803px" y="1653px">9</text>
    <text class="text2" x="3850px" y="1653px">9</text>
    <text class="text1" x="129px" y="1695px">1</text>
    <text class="text1" x="176px" y="1695px">2</text>
    <text class="text1" x="222px" y="1695px">3</text>
    <text class="text1" x="268px" y="1695px">4</text>
    <text class="text1" x="317px" y="1695px">5</text>
    <text class="text1" x="363px" y="1695px">6</text>
    <text class="text1" x="411px" y="1695px">7</text>
    <text class="text1" x="456px" y="1695px">8</text>
    <text class="text1" x="505px" y="1695px">9</text>
    <text class="text1" x="540px" y="1695px">10</text>
    <text class="text1" x="589px" y="1695px">11</text>
    <text class="text1" x="638px" y="1695px">12</text>
    <text class="text1" x="684px" y="1695px">13</text>
    <text class="text1" x="731px" y="1695px">14</text>
    <text class="text1" x="777px" y="1695px">15</text>
    <text class="text1" x="824px" y="1695px">16</text>
    <text class="text1" x="871px" y="1695px">17</text>
    <text class="text1" x="918px" y="1695px">18</text>
    <text class="text1" x="966px" y="1695px">19</text>
    <text class="text1" x="1016px" y="1695px">20</text>
    <text class="text1" x="1062px" y="1695px">21</text>
    <text class="text1" x="1108px" y="1695px">22</text>
    <text class="text1" x="1156px" y="1695px">23</text>
    <text class="text1" x="1204px" y="1695px">24</text>
    <text class="text1" x="1250px" y="1695px">25</text>
    <text class="text1" x="1299px" y="1695px">26</text>
    <text class="text1" x="1345px" y="1695px">27</text>
    <text class="text1" x="1391px" y="1695px">28</text>
    <text class="text1" x="1438px" y="1695px">29</text>
    <text class="text1" x="1486px" y="1695px">30</text>
    <text class="text1" x="1535px" y="1695px">31</text>
    <text class="text1" x="1581px" y="1695px">32</text>
    <text class="text1" x="1627px" y="1695px">33</text>
    <text class="text1" x="1675px" y="1695px">34</text>
    <text class="text1" x="1723px" y="1695px">35</text>
    <text class="text1" x="1769px" y="1695px">36</text>
    <text class="text1" x="1817px" y="1695px">37</text>
    <text class="text1" x="1864px" y="1695px">38</text>
    <text class="text1" x="1911px" y="1695px">39</text>
    <text class="text1" x="1957px" y="1695px">40</text>
    <text class="text1" x="2006px" y="1695px">41</text>
    <text class="text1" x="2052px" y="1695px">42</text>
    <text class="text1" x="2099px" y="1695px">43</text>
    <text class="text1" x="2146px" y="1695px">44</text>
    <text class="text1" x="2194px" y="1695px">45</text>
    <text class="text1" x="2240px" y="1695px">46</text>
    <text class="text1" x="2287px" y="1695px">47</text>
    <text class="text1" x="2335px" y="1695px">48</text>
    <text class="text1" x="2382px" y="1695px">49</text>
    <text class="text1" x="2431px" y="1695px">50</text>
    <text class="text1" x="2478px" y="1695px">51</text>
    <text class="text1" x="2526px" y="1695px">52</text>
    <text class="text1" x="2573px" y="1695px">53</text>
    <text class="text1" x="2620px" y="1695px">54</text>
    <text class="text1" x="2668px" y="1695px">55</text>
    <text class="text1" x="2715px" y="1695px">56</text>
    <text class="text1" x="2761px" y="1695px">57</text>
    <text class="text1" x="2808px" y="1695px">58</text>
    <text class="text1" x="2856px" y="1695px">59</text>
    <text class="text1" x="2903px" y="1695px">60</text>
    <text class="text1" x="2950px" y="1695px">61</text>
    <text class="text1" x="2998px" y="1695px">62</text>
    <text class="text1" x="3045px" y="1695px">63</text>
    <text class="text1" x="3092px" y="1695px">64</text>
    <text class="text1" x="3140px" y="1695px">65</text>
    <text class="text1" x="3187px" y="1695px">66</text>
    <text class="text1" x="3234px" y="1695px">67</text>
    <text class="text1" x="3281px" y="1695px">68</text>
    <text class="text1" x="3327px" y="1695px">69</text>
    <text class="text1" x="3373px" y="1695px">70</text>
    <text class="text1" x="3422px" y="1695px">71</text>
    <text class="text1" x="3469px" y="1695px">72</text>
    <text class="text1" x="3522px" y="1695px">73</text>
    <text class="text1" x="3564px" y="1695px">74</text>
    <text class="text1" x="3612px" y="1695px">75</text>
    <text class="text1" x="3658px" y="1695px">76</text>
    <text class="text1" x="3705px" y="1695px">77</text>
    <text class="text1" x="3750px" y="1695px">78</text>
    <text class="text1" x="3797px" y="1695px">79</text>
    <text class="text1" x="3846px" y="1695px">80</text>
    <text x="413" y="1745" class="text3">IBM 888157</text>
</svg>
</p>
<div class="dyna-caption">Figure 1-4 Program card for DYNAMO.</div>
<div class="dyna-blankline">&nbsp;</div>
`

const page19text = `<div class="dyna-topline">
<span class="left-align">16</span>
<span class="right-align">primer</span>
</div>
<p class="dyna-p1">For convenience the cards may be numbered in columns 75 through 80.</p>
<p class="dyna-p1">The author will not try to explain how to operate a card punch. The fastest way to learn is to find someone to demonstrate how to use one. M.I.T. students and staff can seek help in either the M.I.T. Computation Center or the School of Industrial Management Computer Facility. The IBM manual for the card punch, number A24-0520, also is a source of information, but does not differentiate between necessary information and unimportant details for the novice.</p>
<p class="dyna-p1">A program card (to simplify punching the information into the proper columns) is shown in Figure 1-4. It places the machine in alphabetic shift through column 78. It provides skip stops in columns 7 and 50 (for comments). When the card being punched reaches column 73, it will automatically skip to column 75. Columns 75 through 78 may be either punched (using the NUM button for any numerals) or copied from the previous card by pressing the DUP button. Columns 79 and 80 may be punched with numerical information without using the NUM button.</p>
<p class="dyna-p1">The program card may be punched by passing it through the card punch twice. The first time the letters and numbers shown across the top of the card in Figure 1-4 should be punched. The second time a 2 should be punched in every column. To have the card look exactly like that in Figure 1-4, the print switch must be turned off while punching the 2's.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">1.6&nbsp;&nbsp;Assembling a Run</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">This section explains the few requirements on the order of the cards, and the method for obtaining several runs of a model with different constants.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Order of Cards</span></p>
<p class="dyna-p1">DYNAMO is quite liberal about the order of the cards. The only requirement is that the identification card must be first and the RUN card second. (Also, continuation cards must be in order and must follow the card they continue.)</p>
<p class="dyna-p1">This is an appropriate time to introduce one last card, the NOTE card. The NOTE card permits the user to identify portions of his deck or to add any comments that help clarify the model. NOTE is punched in columns 1 through 4, and the comment may start in column 7 or later. A NOTE card with nothing but NOTE punched in it will result in a blank line in the listing DYNAMO makes of the model.</p>
<p class="dyna-p1">Figure 1-5 is a listing of the model that we have been discussing, with the cards in an order suitable for DYNAMO.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Reruns</span></p>
<p class="dyna-p1">Frequently a DYNAMO user will want to run a model several times with different values for one or more constants. He can do this by following the basic run with another RUN card and one or more constant cards with the new values of the constants. The RUN card must be first, and only those constants that were originally specified by C cards may be altered. For example, in order to rerun the retail store model with a larger step input and longer delay in delivery of goods to the retail store, the cards would be</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">RUN</span><span class="dyna-tab3">2698JP</span></p>
<p class="dyna-p2"><span class="dyna-tab19">NOTE</span><span class="dyna-tab2">LARGER STEP INPUT AND LONGER DELAY IN TRANSIT</span></p>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab5">STH=200 ITEMS/WK</span></p>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab5">DTR=4 WKS</span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page20text = `<div class="dyna-topline">
<span class="left-align">error examples</span>
<span class="right-align">17</span>
</div>
<p class="dyna-p3">As can be seen in this example, NOTE cards may also be included.</p>
<p class="dyna-p1">If several reruns are made, all constants that were modified in the previous rerun are first restored to the values they had in the original run. Thus, if the user wished to make a second rerun with the same value of STH as in the rerun shown, he would have to include another C card for it in the second rerun.</p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2">*<span class="dyna-tab5">M478-248,DYN,TEST,2,3,0,0</span></p>
<p class="dyna-p2">RUN<span class="dyna-tab3">2698JP</span></p>
<p class="dyna-p2">NOTE<span class="dyna-tab2">MODEL OF RETAIL STORE</span></p>
<p class="dyna-p2">NOTE</p>
<p class="dyna-p2">1L<span class="dyna-tab4">IAR.K=IAR.J+(DT)(SRR.JK-SSR.JK)</span><span class="dyna-tab13">INVENTORY ACTUAL</span></p>
<p class="dyna-p2">1L<span class="dyna-tab4">UOR.K=UOR.J+(DT)(RRR.JK-SSR.JK)</span><span class="dyna-tab13">UNFILLED ORDERS</span></p>
<p class="dyna-p2">20A<span class="dyna-tab3">NIR.K=IAR.K/DT</span><span class="dyna-tab30">NEGATIVE INVENTORY</span></p>
<p class="dyna-p2">20A<span class="dyna-tab3">STR.K=UOR.K/DFR</span><span class="dyna-tab29">SHIPMENTS TRIED</span></p>
<p class="dyna-p2">54R<span class="dyna-tab3">SSR.KL=MIN(STR.K,NIR.K)</span><span class="dyna-tab21">SHIPMENTS SENT</span></p>
<p class="dyna-p2">40R<span class="dyna-tab3">PSR.KL=RRR.JK+(1/DIR)(IDR.K-IAR.K)</span><span class="dyna-tab10">PURCHASE ORDERS SENT</span></p>
<p class="dyna-p2">12A<span class="dyna-tab3">IDR.K=(AIR)(RSR.K)</span><span class="dyna-tab26">INVENTORY DESIRED</span></p>
<p class="dyna-p2">3L<span class="dyna-tab4">RSR.K=RSR.J+(DT)(1/DRR)(RRR.JK-RSR.J)</span><span class="dyna-tab7">REQUISITIONS SMOOTHED</span></p>
<p class="dyna-p2">39R<span class="dyna-tab3">SRR.KL=DELAY3(PSR.JK,DTR)</span><span class="dyna-tab19">SHIPMENTS RECEIVED</span></p>
<p class="dyna-p2">NOTE</p>
<p class="dyna-p2">NOTE<span class="dyna-tab2">INITIAL CONDITIONS</span></p>
<p class="dyna-p2">NOTE</p>
<p class="dyna-p2">12N<span class="dyna-tab3">UOR=(DFR)(RRR)</span></p>
<p class="dyna-p2">6N<span class="dyna-tab4">RSR=RRR</span></p>
<p class="dyna-p2">6N<span class="dyna-tab4">IAR=IDR</span></p>
<p class="dyna-p2">NOTE</p>
<p class="dyna-p2">NOTE<span class="dyna-tab2">INPUT</span></p>
<p class="dyna-p2">NOTE</p>
<p class="dyna-p2">7R<span class="dyna-tab4">RRR.KL=RRI+RCR.K</span><span class="dyna-tab28">REQUISITIONS RECEIVED</span></p>
<p class="dyna-p2">45A<span class="dyna-tab3">RCR.K=STEP(STH,5)</span><span class="dyna-tab27">REQUISITION CHANGE</span></p>
<p class="dyna-p2">NOTE</p>
<p class="dyna-p2">NOTE<span class="dyna-tab2">CONSTANTS</span></p>
<p class="dyna-p2">NOTE</p>
<p class="dyna-p2">C<span class="dyna-tab5">AIR=8&nbsp;WKS</span><span class="dyna-tab35">CONSTANT FOR INVENTORY</span></p>
<p class="dyna-p2">C<span class="dyna-tab5">DFR=1&nbsp;WK</span><span class="dyna-tab36">DELAY IN FILLING ORDERS</span></p>
<p class="dyna-p2">C<span class="dyna-tab5">DIR=4&nbsp;WKS</span><span class="dyna-tab35">DLY REFILLING INVENTORY</span></p>
<p class="dyna-p2">C<span class="dyna-tab5">DRR=8&nbsp;WKS</span><span class="dyna-tab35">REQUISITION SMTHNG T C</span></p>
<p class="dyna-p2">C<span class="dyna-tab5">DTR=2&nbsp;WKS</span><span class="dyna-tab35">DELAY IN TRANSIT</span></p>
<p class="dyna-p2">C<span class="dyna-tab5">RRI=1000&nbsp;ITEMS/WK</span><span class="dyna-tab27">REQ. RECEIVED INITIALLY</span></p>
<p class="dyna-p2">C<span class="dyna-tab5">STH=100&nbsp;ITEMS/WK</span><span class="dyna-tab28">STEP HEIGHT</span></p>
<p class="dyna-p2">NOTE</p>
<p class="dyna-p2">PRINT<span class="dyna-tab1">1)IAR,IDR/2)UOR/3)RRR,SSR/4)PSR,SRR</span></p>
<p class="dyna-p2">PLOT<span class="dyna-tab2">IAR=I,UOR=U/RRR=R,SSR=S,PSR=P,SRR=Q</span></p>
<p class="dyna-p2">SPEC<span class="dyna-tab2">DT=0.1/LENGTH=10/PRTPER=5/PLTPER=0</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-caption">Figure 1-5 Listing of model.</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">1.7&nbsp;&nbsp;Error Examples</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">DYNAMO checks every model extensively. It will not run a model unless the model is consistent. The checks do not guarantee that the model is what the user intended, but most of the errors will be caught.</p>
<p class="dyna-p1">The following are a few examples of the types of errors that are frequently made, followed by brief explanations.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page21text = `<div class="dyna-topline">
<span class="left-align">18</span>
<span class="right-align">primer</span>
</div>
<p class="dyna-p3">*<span class="dyna-tab2">DYN EXPECTED ) WHERE FOUND CHAR.INDICATED</span></p>
<p class="dyna-p3"><span class="dyna-tab34">V</span></p>
<p class="dyna-p3"><span class="dyna-tab13">12A IDR.K=(AIR)(RSR.K.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p4">should have been</p><p class="dyna-p4">should have been</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">12A IDR.K=(AIR)(RSR.K)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">QUANTITY TYPE AND TIME-SUBSCRIPT ON QUANTITY DEFINED DO NOT AGREE</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">20A NIR.KL=IAR.K/DT</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p4">should have been</p><p class="dyna-p4">should have been</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">20A NIR.K=IAR.K/DT</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">DYN EXPECTED ( WHERE FOUND CHAR.INDICATED</span></p>
<p class="dyna-p3"><span class="dyna-tab23">V</span></p>
<p class="dyna-p3"><span class="dyna-tab13">12A STR.K=UOR.K/DFR</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p4">This comment is the consequence of DYNAMO's assumption that the equation form number was right. The correct equation form number is 20, and the card should read</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">20A STR.K=UOR.K/DFR</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">DYN EXPECTED + WHERE FOUND CHAR.INDICATED</span></p>
<p class="dyna-p3"><span class="dyna-tab30">V</span></p>
<p class="dyna-p3"><span class="dyna-tab13">4OR PSR.KL=RRR.JK-(1/DIR)(IAR.K-IDR.K)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">This sign may not be changed to -, this equation must be written</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">40R PSR.KL=RRR.JK+(1/DIR)(-IAR.K+IDR.K)</span></p>
<p class="dyna-p3">*<span class="dyna-tab2">or</span></p>
<p class="dyna-p3"><span class="dyna-tab13">40R PSR.KL=RRR.JK+(1/DIR)(IDR.K-IAR.K)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">TOO MANY CHARACTERS IN (DFR)(</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">20N UOR=(DFR)(RRR)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p4">Unfortunately, this is a rather obscure explanation of a simple error. The error is that the equation form number should be 12 rather than 20. As above, DYNAMO assumed that the equation form number was right and tried to find a quantity name between the = and a /. As it could not find a / before it found six other characters, it printed out that there are too many characters in what it thought was a quantity name. The corrected card is</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">12N UOR=(DFR)(RRR)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">PSR HAS UNALLOWED SUBSCRIPT</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">39R SRR.KL=DELAY3(PSR.KL,DTR)</span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page22text = `<div class="dyna-topline">
<span class="left-align">error examples</span>
<span class="right-align">19</span>
</div>
<p class="dyna-p4">should have been</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">39R SRR.KL=DELAY3(PSR.JK,DTR)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">STR DEFINED TWICE</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab13">20A STR.K=UOR.K/DFR</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p4">There are two cards that define STR.  DYNAMO has printed the second. One must be removed. (An initial-condition equation for STR is not considered a double definition, although two N equations for STR would be.)</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">IAR REQUIRES INITIAL VALUE</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p4">The N equation for IAR was left out.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">NER IS UNDEFINED IN EQN FOR     SSR</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p4">Equation for SSR was mispunched with NER rather than NIR, and consequently NER appeared to be an undefined variable.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">RCR IS UNDEFINED IN EQN FOR     RRR</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p4">Card defining RCR was forgotten.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">*<span class="dyna-tab2">SIMULTANEOUS EQNS AMONG-N EQN</span></p>
<p class="dyna-p4"><span class="dyna-tab2">PSR</span></p>
<p class="dyna-p4"><span class="dyna-tab2">SRR</span></p>
<p class="dyna-p4"><span class="dyna-tab2">RRR</span></p>
<p class="dyna-p4"><span class="dyna-tab2">RSR</span></p>
<p class="dyna-p4"><span class="dyna-tab2">IDR</span></p>
<p class="dyna-p4"><span class="dyna-tab2">IAR</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p4">&nbsp;&nbsp;This error was contrived by setting RRR equal to SRR initially. When the user encounters such an error comment, he must examine the "ring" of simultaneous equations to see where it can be broken. If the simultaneity is among N equations, he will probably discover that some of them were created by DYNAMO out of A or R equations. Generally, he will find a variable in the ring to which he can easily assign an initial value. In the example, eliminating the equation for RRR will force DYNAMO to create one that will be satisfactory.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page23text = `<center class="dyna-hdr2">Chapter 2</center>
<center class="dyna-hdr3">REFERENCE MANUAL</center>
<p class="dyna-p2">2.1&nbsp;&nbsp;<span class="dyna-underline">Introduction</span></p>
<p class="dyna-p1">Although DYNAMO is simple to use, its rules must be followed carefully. This chapter presents the rules in a complete and precise manner.</p>
<p class="dyna-p1">It is recommended that anyone reading this chapter for the first time ignore all references to boxcars and boxcar trains until Section 2.5, which describes them in detail. Their inclusion in the earlier sections is for completeness.</p>
<p class="dyna-p1">Two types of punched cards are used by DYNAMO in generating a running code: equation cards and direction cards. The equation cards describe the model and the numerical values; the direction cards specify the length of run, the variables to be printed and plotted, and so forth.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">2.2&nbsp;&nbsp;<span class="dyna-underline">Equation Cards</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">In brief, equations for a model are written by</p>
<ul class="dyna-list"><li>Deciding upon the quantity type<sup> †</sup> of the quantity being computed</li><li>Deciding which quantities (variables and constants) determine this quantity</li><li>Deciding upon the algebraic form of this relationship</li><li>Looking up this algebraic form in the appendix for the equation form number and the exact punching format of the equation</li></ul>
<p class="dyna-p1"><span class="dyna-underline">Quantity Types</span></p>
<p class="dyna-p1">The following seven quantity types are recognized by DYNAMO:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">L</span><span class="dyna-tab6">Level</span></p>
<p class="dyna-p2"><span class="dyna-tab19">A</span><span class="dyna-tab6">Auxiliary</span></p>
<p class="dyna-p2"><span class="dyna-tab19">R</span><span class="dyna-tab6">Rate</span></p>
<p class="dyna-p2"><span class="dyna-tab19">C</span><span class="dyna-tab6">given Constant</span></p>
<p class="dyna-p2"><span class="dyna-tab19">N</span><span class="dyna-tab6">iNitial value or iNitially computed constant</span></p>
<p class="dyna-p2"><span class="dyna-tab19">B</span><span class="dyna-tab6">Boxcar train</span></p>
<p class="dyna-p2"><span class="dyna-tab19">S</span><span class="dyna-tab6">Supplementary</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">A <span class="dyna-underline">Level</span> is a quantity whose value at a given time is computed from its value at the previous time that calculations were made and from its rate of change during the time interval between calculations.</p>
<p class="dyna-p1">An <span class="dyna-underline">Auxiliary</span> is a quantity introduced to simplify the set of equations or</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> Quantity type is perhaps not as suggestive a term as desirable. Earlier the name "variable type" was used, but this term was poor because constants are included in quantity type.</p>
</div><center class="dyna-footer1">20</center>
<div class="dyna-blankline">&nbsp;</div>
`

const page24text = `<div class="dyna-topline">
<span class="left-align">equation cards</span>
<span class="right-align">21</span>
</div>
<p class="dyna-p1">because a particular equation format is not available; it is auxiliary in the sense that it could be eliminated by substitution into the rate equations.</p>
<p class="dyna-p1">A <span class="dyna-underline">Rate</span> is a quantity whose value indicates a rate of flow during a time-step interval.</p>
<p class="dyna-p1">A <span class="dyna-underline">given Constant</span> is a quantity whose numerical value is given explicitly and is held constant for a particular run. (Its value may be changed in succeeding runs.)</p>
<p class="dyna-p1"><span class="dyna-underline">iNitial values</span> are specified for various quantities at the start of a run. (Section "Initial Values," pages 24 and 25, describes in detail those circumstances where initial values are required.)</p>
<p class="dyna-p1"><span class="dyna-underline">iNitially computed constants</span> are constants that have a direct relationship to other (given or computed) constants and are computed from them at the beginning of the run.</p>
<p class="dyna-p1">A <span class="dyna-underline">Boxcar train</span> is a set of quantities that are all shifted down one boxcar position at specified shift times. (Section 2.5 discusses boxcar trains in detail.)</p>
<p class="dyna-p1">A <span class="dyna-underline">Supplementary</span> quantity is one which is extraneous to the set of equations proper and which is introduced only as a quantity to be printed or plotted. It is computed only at the output times.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Quantity Names</span></p>
<p class="dyna-p1">Each quantity must be given a name of five or fewer alphabetic or numerical characters (no hyphens, slashes, etc.), the first character of which must be alphabetic, for example, X, INV, or PROD1.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Equation Forms</span></p>
<p class="dyna-p1">After the algebraic relationship has been decided, Appendix B is checked for the equation form number and the exact punching format of the equation.</p>
<p class="dyna-p1">This appendix will be described by discussing its first entry:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">General Form</span><span class="dyna-tab23">Exact Punching Format</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">V = V + (DT)(P + Q)</span><span class="dyna-tab7">1L</span><span class="dyna-tab7">V.K=V.J+(DT)(±P±Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The number in the middle is the equation form number. The letter following it indicates certain restrictions on the use of that equation form. The "General Form" gives the equation form in its familiar algebraic format. As most of the signs are flexible (as will be seen shortly), they are all given as plus. The "Exact Punching Format" gives the precise order of quantities and algebraic symbols that must be used for DYNAMO.</p>
<p class="dyna-p1">The letters following the equation form number in Appendix B place the following limitations on the equation form usage:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">A or R</span><span class="dyna-tab5">may be used to define only auxiliaries or rates.</span></p>
<p class="dyna-p2"><span class="dyna-tab11">B</span><span class="dyna-tab10">may be used to define only boxcar trains. Also,</span></p>
<p class="dyna-p2"><span class="dyna-tab24">no other equation types may be used to define</span></p>
<p class="dyna-p2"><span class="dyna-tab24">boxcar trains.</span></p>
<p class="dyna-p2"><span class="dyna-tab11">L</span><span class="dyna-tab10">may be used to define only levels. Furthermore,</span></p>
<p class="dyna-p2"><span class="dyna-tab24">levels may be defined by only so-marked equation</span></p>
<p class="dyna-p2"><span class="dyna-tab24">forms.</span></p>
<p class="dyna-p2"><span class="dyna-tab11">N</span><span class="dyna-tab10">may be used to define only initial values.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-blankline">&nbsp;</div>
`

const page25text = `<div class="dyna-topline">
<span class="left-align">22</span>
<span class="right-align">reference manual</span>
</div>
<p class="dyna-p2"><span class="dyna-tab11">R</span><span class="dyna-tab10">may be used to define only rates.</span></p>
<p class="dyna-p2"><span class="dyna-tab11">no letter</span><span class="dyna-tab2">may be used to define auxiliaries, rates,</span></p>
<p class="dyna-p2"><span class="dyna-tab24">computed constants, initial values, or</span></p>
<p class="dyna-p2"><span class="dyna-tab24">supplementaries, that is, any quantity type</span></p>
<p class="dyna-p2"><span class="dyna-tab24">except level or boxcar train.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The letters used in the "General Form" and the "Exact Punching Format" indicate the kinds of quantities which may be used in that particular equation form:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">V</span><span class="dyna-tab15">the quantity being defined, appearing on the left</span></p>
<p class="dyna-p2"><span class="dyna-tab29">of the equality sign. It of course must be a</span></p>
<p class="dyna-p2"><span class="dyna-tab29>quantity name.</span></p>
<p class="dyna-p2"><span class="dyna-tab11">P through U</span><span class="dyna-tab5">may be either a quantity name<sup> †</sup> or a numerical</span></p>
<p class="dyna-p2"><span class="dyna-tab11">W through Z</span>
<span class="dyna-tab7">value.<sup>‡</sup></span>
<svg class="svgplacement01" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="12" font-size="16px" font-weight="200" fill="#523a28">}</text>
</svg>
</p>
<p class="dyna-p2"><span class="dyna-tab11">N, N1, N2<span class="dyna-tab7">must be a Numerical value.</span></p>
<p class="dyna-p2"><span class="dyna-tab11">C, C1, C2<span class="dyna-tab7">must be either a Constant (given or computed)</span></p>
<p class="dyna-p2"><span class="dyna-tab29>or a numerical value.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The equation forms must be used exactly as shown in the "Exact Punching Format." For example, the sum of two quantities divided by a third must be punched</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">X=(1/Y)(P+Q)</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">as shown in Equation Form 18 and <span class="dyna-underline">not</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">X=(P+Q)/Y</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">or</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">X=(P+Q)/(Y)</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">or</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">X=(P+Q)(1/Y)</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">although they are algebraically equivalent. However, there is wide latitude with respect to the algebraic sign of the quantities used in the equation forms. Any place that a "+" appears in the equation form, either sign may be used. Furthermore, as in high-school algebra, the plus sign may be omitted after an equality sign, a left parenthesis, a comma, or a slash. For example,
</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">V=+P+(+Q)(+R)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">and</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">V=P+(Q)(R)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">are both equally acceptable to DYNAMO.</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> Further restrictions will be discussed in the section, "Subscripts and Permissible Defining Quantities," page 23.</p>
<p class="dyna-footnote"><sup>‡</sup> The permissible formats of numerical values are described on page 26.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page26text = `<div class="dyna-topline">
<span class="left-align">equation cards</span>
<span class="right-align">23</span>
</div>
<p class="dyna-p1">Occasionally a desired equation form cannot be found in Appendix B. This may occur because the desired equation form is more complicated than any of those provided or because an almost satisfactory form contains too many factors or terms. The latter situation can generally be taken care of by setting the extra factors equal to 1 or the extra terms equal to 0. For example, the sum of five terms can be constructed from Equation Form 10 as follows:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">10</span><span class="dyna-tab5">V=P+Q+R+S+T+0.0</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">and the ratio of two factors to two factors can be constructed from Equation Form 46 as follows:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">46</span><span class="dyna-tab5">V=(P)(Q)(1)/((R)(S)(1))</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">If the equation form desired is not available because the equation is too complicated, the equation can generally be constructed from two or more existing equation forms by defining extra quantities. For example, the equation form</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">V=(P)(Q)/(R+S+T)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">is not available but can be constructed from Equation Forms 44 and 8:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">44</span><span class="dyna-tab5">V=(P)(Q)/U</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">8</span><span class="dyna-tab6">U=R+S+T</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Subscripts and Permissible Defining Quantities </span></p>
<p class="dyna-p1">Quantity names are given a time subscript to remind the user of the type of quantity and the order of computation. (As standard card-punching equipment does not permit the usual subscript notation, the time subscript becomes a postscript set off from the quantity name by a decimal point; for example, X.K denotes the quantity X at time K.) Levels, auxiliaries, and supplementaries have a single-letter subscript, for instance, LEV.J, AUX.K. Rates always have a double-letter subscript, for example, RATE1.JK, RATE2.KL. Both given and computed constants have no subscript. Boxcars have a single-letter sub- script. Boxcar trains have no subscript when being defined (by a B equation) but are given the subscript .K when used on the right side of Equation Forms 53, 55, or 57. Initial values have no subscripts.</p>
<p class="dyna-p1">Since the present time at which a level is calculated is defined as the time instant K, and the forthcoming time interval for which a rate is calculated is defined as the time K to L, the variable quantity being defined will always be given the subscript K or KL depending on the quantity type, for example, LEV.K, AUX. K, RATE. KL, SUPL. K.</p>
<p class="dyna-p1">Levels may be based on constants, levels or auxiliaries from the previous time instant, or rates from the previous time interval. Therefore, the quantities on the right of the equality sign in level equations must have either no subscript (indicating a constant) or the subscripts .J or .JK (indicating a variable). Auxiliaries may be based on constants (no subscripts), levels or other auxiliaries at the same time instant .K, or rates from the previous time interval. JK. Rates may be based on constants (no subscripts), levels or auxiliaries at the present instant .K, or rates from the previous time interval .JK. Supplementaries may</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page27text = `<div class="dyna-topline">
<span class="left-align">24</span>
<span class="right-align">reference manual</span>
</div>
<p class="dyna-p2">be based on constants (no subscripts), levels, auxiliaries, or supplementaries at the present time instant K, or rates from the previous interval .JK.  Note that a supplementary may appear only on the right side of another supplementary equation.</p>
<p class="dyna-p1">Computed constants may be based on given constants and other computed constants. <sup> †</sup> Initial values may be based on given or computed constants or other initial values, except the initial value of boxcars. Thus neither side of an N equation has any quantities with subscripts.</p>
<p class="dyna-p1">Table 2.1 summarizes these subscript conventions.</p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-caption">Table 2-1 Subscript Table</div>
<div class="dyna-shortblank">&nbsp;</div>
<div class="svg-fullwidth">
<svg class="svg-content" width="740" height="260" xmlns="http://www.w3.org/2000/svg">
<style id="style1">
    .lines {
      stroke: #523a28;
      stroke-width: 1.0;
    }
    .centered-text {
      font-size: 16px;
      fill: #523a28;
      text-anchor: middle;
    }
    .indented-text {
      font-size: 16px;
      fill: #523a28;
      text-anchor: start;
    }
</style>
<line class="lines" x1="1.5" y1="1.5" x2="738.5" y2="1.5"/>
<line class="lines" x1="1.5" y1="53.7" x2="738.5" y2="53.7"/>
<line class="lines" x1="389.9" y1="90.9" x2="738.5" y2="90.9"/>
<line class="lines" x1="1.5" y1="258.5" x2="738.5" y2="258.5"/>
<line class="lines" x1="1.5" y1="1.5" x2="1.5" y2="258.5"/>
<line class="lines" x1="260.4" y1="1.5" x2="260.4" y2="258.5"/>
<line class="lines" x1="389.9" y1="1.5" x2="389.9" y2="258.5"/>
<line class="lines" x1="448.7" y1="53.7" x2="448.7" y2="258.5"/>
<line class="lines" x1="496.5" y1="53.7" x2="496.5" y2="258.5"/>
<line class="lines" x1="558.2" y1="53.7" x2="558.2" y2="258.5"/>
<line class="lines" x1="603.5" y1="53.7" x2="603.5" y2="258.5"/>
<line class="lines" x1="672.8" y1="53.7" x2="672.8" y2="258.5"/>
<line class="lines" x1="738.5" y1="1.5" x2="738.5" y2="258.5"/>
<text class="centered-text" x="131" y="26.85" dominant-baseline="middle">
  <tspan x="131" dy="-0.6em">Quantity Type</tspan>
  <tspan x="131" dy="1.2em">on Left of Equation</tspan>
</text>
<text class="centered-text" x="325.1" y="26.9" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">Subscript</tspan>
  <tspan x="325.1" dy="1.2em">on Left</tspan>
</text>
<text class="centered-text" x="564.2" y="26.9" dominant-baseline="middle">
  <tspan x="564.2" dy="-0.6em">Subscripts on Quantities</tspan>
  <tspan x="564.2" dy="1.2em">on Right if Quantity is</tspan>
</text>
<text class="centered-text" x="419.1" y="80" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.43em">L</tspan>
</text>
<text class="centered-text" x="472.6" y="80" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.43em">A</tspan>
</text>
<text class="centered-text" x="527.3" y="80" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.43em">R</tspan>
</text>
<text class="centered-text" x="580.9" y="80" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.43em">S</tspan>
</text>
<text class="centered-text" x="638.1" y="80" dominant-baseline="middle">
  <tspan x="638.1" dy="-0.43em">C</tspan>
</text>
<text class="centered-text" x="705.7" y="80" dominant-baseline="middle">
  <tspan x="705.7" dy="-0.43em">N</tspan>
</text>
<text class="indented-text" x="31.5" y="120" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">L</tspan>
  <tspan x="4em" dy="0">Level</tspan>
</text>
<text class="centered-text" x="325.1" y="120" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="419.1" y="120" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">J</tspan>
</text>
<text class="centered-text" x="472.6" y="120" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">J</tspan>
</text>
<text class="centered-text" x="527.3" y="120" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">JK</tspan>
</text>
<text class="centered-text" x="580.9" y="120" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="120" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="120" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="31.5" y="142" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">A</tspan>
  <tspan x="4em" dy="0">Auxiliary</tspan>
</text>
<text class="centered-text" x="325.1" y="142" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="419.1" y="142" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="472.6" y="142" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="527.3" y="142" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">JK</tspan>
</text>
<text class="centered-text" x="580.9" y="142" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="142" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="142" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="31.5" y="164" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">R</tspan>
  <tspan x="4em" dy="0">Rate</tspan>
</text>
<text class="centered-text" x="325.1" y="164" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">KL</tspan>
</text>
<text class="centered-text" x="419.1" y="164" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="472.6" y="164" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="527.3" y="164" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">JK</tspan>
</text>
<text class="centered-text" x="580.9" y="164" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="164" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="164" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="31.5" y="186" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">S</tspan>
  <tspan x="4em" dy="0">Supplementary</tspan>
</text>
<text class="centered-text" x="325.1" y="186" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="419.1" y="186" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="472.6" y="186" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="527.3" y="186" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">JK</tspan>
</text>
<text class="centered-text" x="580.9" y="186" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">K</tspan>
</text>
<text class="indented-text" x="603.5" y="186" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="186" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="31.5" y="208" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">C</tspan>
  <tspan x="4em" dy="0">Constant</tspan>
</text>
<text class="indented-text" x="40" y="252" dominant-baseline="middle">
  <tspan x="4.4em" dy="-0.6em">computed constant</tspan>
</text>
<text class="centered-text" x="325.1" y="208" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">none</tspan>
</text>
<text class="centered-text" x="419.1" y="208" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="472.6" y="208" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="527.3" y="208" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="580.9" y="208" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="208" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="672.8" y="208" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="40" y="230" dominant-baseline="middle">
  <tspan x="4.4em" dy="-0.6em">iNitial value or</tspan>
</text>
<text class="indented-text" x="31.5" y="241" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">N</tspan>
</text>
<text x="44" y="93.2" class="indented-text" transform="scale(1.25,2.6)">{</text>
<text class="centered-text" x="325.1" y="241" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">none</tspan>
</text>
<text class="centered-text" x="419.1" y="241" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="472.6" y="241" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="527.3" y="241" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="580.9" y="241" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="241" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="241" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
</svg>
</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Note that every quantity that appears on the right side of any equation must be defined, that is, appear on the left of that or some other equation. (The easiest way to check this is to let DYNAMO check it.) There are two special cases of this rule: DT and TIME. DT is specified on the SPEC card (see
page 28) and may be used as a constant on the right of any equation. TIME is a true exception. It is not defined anywhere but rather is built into DYNAMO. It may be used as a level on the right of any equation where levels are permitted.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Initial Values</span></p>
<p class="dyna-p1">In order to get a model started, some variables will require initial values. Some of these initial values can be computed by DYNAMO; others will require explicit values provided by the user.</p>
<p class="dyna-p1">All <span class="dyna-underline">Levels</span> require initial values that the user must provide.  If the level is not a boxcar, the initial value will be specified by an N-type equation. If the level is also a boxcar, the initial value will be specified with the initial values for the boxcar train.</p>
<p class="dyna-p1">Every <span class="dyna-underline">Boxcar Train</span> requires initial values specified by a C card (see page 27) or by the BOXLOAD equation (see pages 33-34).</p>
<p class="dyna-p1">No <span class="dyna-underline">Supplementary</span> ever requires an initial value, and the inclusion of one in a model is an error recognized by DYNAMO.</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> DYNAMO also permits computed constants to be based on initial values (except the value of boxcars), but this flexibility will be of little use to most users.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page28text = `<div class="dyna-topline">
<span class="left-align">equation cards</span>
<span class="right-align">25</span>
</div>
<p class="dyna-p1">DYNAMO will provide initial values for those auxiliaries and rates that require them by simply repeating the auxiliary or rate equation as an N-equation. This frequently leads to additional auxiliaries and rates requiring initial values as now they appear on the right side of an initial-value equation.<sup> †</sup> DYNAMO continues the process of generating N equations from A and R type equations until all the required initial values are specified or until DYNAMO finds a set of simultaneous equations. If this occurs, DYNAMO prints out that fact along with a list of the variables involved in the simultaneous solution.</p>
<p class="dyna-p1">In such cases the user should select a variable from the list and write an N-equation for it that does not involve any of the other quantities in the list.</p>
<p class="dyna-p1">An example of the process of creating initial-value equations is given in Chapter 3.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Equation Card Punching</p>
<p class="dyna-p1">Equation cards are created by punching the equation form number starting in column 1, followed <span class="dyna-underline">without any intervening spaces</span> by the letter corresponding to the quantity type. The actual equation starts in column 7 and may extend no farther than column 72. If more space is required, continuation card(s) must be used. As pointed out earlier, the exact format indicated in Appendix B must be followed, and the time subscripts must be correct. An identifying serial number for the equation may be punched in columns 75 through 80. For example:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">&nbsp;COLUMN&nbsp;&nbsp;&nbsp;123456789.........................<span class="rightside">...567898<sup>0</sup></span></p>
<p class="dyna-p2"><span class="dyna-tab10">1L</span><span class="dyna-tab4">UO.K=UO.J+(DT)(OR.JK-DL.JK)</span><span class="rightside">JP0027<sup> </sup></span></p>
<p class="dyna-p2"><span class="dyna-tab10">12N</span><span class="dyna-tab3">UO=(DEL)(OR)</span><span class="rightside">JP0028<sup> </sup></span></p>
<p class="dyna-p2"><span class="dyna-tab10">20R</span><span class="dyna-tab3">DL.KL=UO.K/DEL</span><span class="rightside">JP0029<sup> </sup></span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Rule of the Final Space.</span> No spaces may be inserted in the equation, but the equation must be followed by at least one space to indicate the end of the equation. If the last character of an equation should fall in column 72, a continuation card (see below) must be used to provide the final space. The same rule applies to the information provided on direction cards (with the one exception of the NOTE card). No spaces may be inserted within the information, but a "final" space must be provided to indicate the end of the information.</p>
<p class="dyna-p1"><span class="dyna-underline">Continuation Cards.</span> No equation or direction card information may extend beyond column 72. If the material will not fit, continuation card(s) must be used. Continuation cards are identified by an X in column 1 followed by the number of the continuation card, for example, X1, X2, and so on. The continuation cards must be inserted in ascending order immediately following the original</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup>Auxiliaries that appear in some initial-value equation and rates that are used on the right side of auxiliary, rate, supplementary, or initial-value equations must have an initial-value equation provided either by the user or DYNAMO.</p>
<p class="dyna-footnote">&nbsp;&nbsp;<span class="dyna-underline">Third-Order Delays</span> are a special case. The set of equations that make up a third-order delay (see footnote, page 36) contains three initial-value equations that have the input on the right. Thus DYNAMO or the user must provide an initial value for the input. But note that one of those equations is the initial value for the output. Consequently, no initial value is ever required for the output of a third-order delay, and the inclusion of one is an error.
<div class="dyna-blankline">&nbsp;</div>
`

const page29text = `<div class="dyna-topline">
<span class="left-align">26</span>
<span class="right-align">reference manual</span>
</div>
<p class="dyna-p3">card and must contain the same identifying information in columns 75 through 80 as the original card. This is one of the few places where card order is important in DYNAMO. (Card order is discussed further on page 32.) For example, if the user is employing Equation Form 17,
</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">V=(P)(Q)(R)+(S)(T)(U)+(W)(X)(Y)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">and if the last term is (ABC)(XYZ.K)(TUV.K) with Z falling in column 72, the continuation card is</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789........</span></p>
<p class="dyna-p2"><span class="dyna-tab21">X1</span><span class="dyna-tab2">.K)(TUV.K)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Numerical Values.</span> Numerical values on equation or direction cards can be expressed by up to 8 digits, in addition to sign and decimal point. A decimal point on the right of a number may be dropped; and a plus sign following an equality sign, a left parenthesis, a comma, or a slash can be dropped. Examples of several different numerical values are</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">37</p>
<p class="dyna-p2"><span class="dyna-tab11">+42600.</p>
<p class="dyna-p2"><span class="dyna-tab11">-0.075</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Eight digits may be unsatisfactory in expressing very large or very small numbers. For this reason the number expressed may be multiplied by some power of 10 by immediately following the number with the letter E and the power of 10. When the sign is plus, it may be dropped. For example, 82 billion (82 × 109) can be written</p>
<p class="dyna-p2"><span class="dyna-tab11">82E+9 OR 82E9</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">and 1 ten-thousandth (1 × 10<sup>-4</sup>) can be written</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">1E-4</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">The ultimate limit on the size of number that may be used is that the magnitude of the difference between the power of 10 and the number of digits to the right of the decimal point must not exceed 29.</p>
<p class="dyna-p1"><span class="dyna-underline">Comments.</span> To save searching through one's notes, it is often convenient to have a description of a quantity on the card that defines that quantity. Such a comment may be added to an equation card (or any card for that matter) following the "final space." These comments are listed along with the equations at the beginning of every run. Standardizing the location where the comment begins (if the length of the equation permits) helps the readability of such comments. The comments may not extend beyond column 72 and may not be continued on a continuation card. If it is desirable to continue them, they may be continued on a NOTE card. See page 31 for NOTE cards. For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab3">COLUMN  123456789..............................................</p>
<p class="dyna-p2"><span class="dyna-tab3">1L</span><span class="dyna-tab4">UO.K=UO.J+(DT)(OR.JK-DL.JK)</span><span class="dyna-tab6">UNFILLED ORDERS</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Constant Cards</span></p>
<p class="dyna-p1">Given constants are defined on special equation cards that have no equation form number. Only the letter "C" appears in column 1. The quantity name</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page30text = `<div class="dyna-topline">
<span class="left-align">direction cards</span>
<span class="right-align">27</span>
</div>
<p class="dyna-p2">of the constant starts in column 7, followed by an equality sign and the desired numerical value. For example.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789.....</span></p>
<p class="dyna-p2"><span class="dyna-tab21">C</span><span class="dyna-tab5">ABC=3.0</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">More than one constant may be defined on a single card by separating them with slashes. For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789.....................</span></p>
<p class="dyna-p2"><span class="dyna-tab21">C</span><span class="dyna-tab5">ABC=3.0/BCD=32/CCC=12E6</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">No spaces may be included before the "final space," and a slash after the last constant (before the final space) is an error. The practice of including several constants on a single card has the disadvantage of requiring the repunching of a long, complicated card to change one constant.</p>
<p class="dyna-p1"><span class="dyna-underline">Tables and Initial Values for Boxcar Trains</span>.†&nbsp;&nbsp;The contents of tables are specified by C cards, as may be the initial values of boxcar trains. In this case the quantity name is followed by an asterisk and then the equality sign. The numerical values follow the equality sign in order and are separated by slashes. The final numerical value is followed by the final space (no slash). For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789..........</span></p>
<p class="dyna-p2"><span class="dyna-tab21">C</span><span class="dyna-tab5">TRN*=0/1/2/3</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Only one table may be defined on a C card. Any number of continuation cards may be used (see page 25). The user is cautioned to include an asterisk after the name of the table or boxcar train and to separate the numbers with slashes rather than commas.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">2.3&nbsp;&nbsp;<span class="dyna-underline">Direction Cards</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Direction cards specify such values as the length of run, the printing and plotting intervals, and the quantities to be printed and plotted. They include Identification, RUN, SPEC, PRINT, PLOT, NOTE, and NOISE cards.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab5"><span class="dyna-underline">Identification Card</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The identification card,‡ which is the first card in a deck, †† provides the Computation Center with such basic information as to whom the deck belongs, what kind of a deck it is (DYNAMO), and how long it will run. It has been fashioned after the standard identification card used by the M.I.T. Computation Center and contains the following items:</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote">† It is recommended that this section be omitted by anyone unfamiliar with boxcar trains (page 32) and the table function (page 38).</p>
<p class="dyna-footnote">‡ At installations other than M.I.T., the user must make an identification card that is similar to the one to be described. The problem number and the programmer's number may be replaced with any alpha-numeric information, but the minus sign and comma preceding DYN must be retained.</p>
<p class="dyna-footnote">†† The order of the cards is discussed in detail on page 32.†† The order of the cards is discussed in detail on page 32.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page31text = `<div class="dyna-topline">
<span class="left-align">28</span>
<span class="right-align">reference manual</span>
</div><ul class="dyna-numlist"><li>The problem number (assigned by the Computation Center)</li><li>The programmer's number (also assigned by the Computation Center)</li><li>DYN to indicate that this is a DYNAMO run</li><li>Either the word TEST, to indicate that the model is still being developed and checked out, or the word RESULT, to indicate that the model is checked out and this run will probably be a part of the final results of the research</li><li>The number of minutes that the run (and reruns if any) is expected to take</li><li>The maximum number of minutes that the computer operator should allow the run (and reruns) to take. (This time limit protects the user from using an excessive amount of time should he make an error in the time required for this run. See page 43 for estimating the time.)</li><li>0,0 (required to conform to M.I.T. Computation Center procedures)</li></ul>
<p class="dyna-p1">The permissible format for this information is quite flexible, but the following specifications are consistent with the rest of DYNAMO and therefore recommended.</p>
<p class="dyna-p1">An asterisk must be punched in column 1. The above information is supplied in the order given, starting in column 7. The problem number is separated from the programmer's number by a minus sign, and other pieces of information are separated by commas. The two zeros are followed by the "final space," but no space may be included within the information. Following the final space, any comment may be added. For example:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">COLUMN&nbsp;&nbsp;&nbsp;123456789................................................</p>
<p class="dyna-p2"><span class="dyna-tab9">*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M478-248,DYN,TEST,2,3,0,0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GROWTH MODEL II</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab5"><span class="dyna-underline">Run Card</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Each run (or rerun) is assigned a "run number" by which it can be identified and filed. This number appears at the top of each page along with the page number. The number is provided by a card with RUN in columns 1, 2, and 3 and the run number in columns 7 through 12. Any characters may be used. Each group of DYNAMO users will prescribe how these numbers will be generated. Example:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789....</span></p>
<p class="dyna-p2"><span class="dyna-tab21">RUN&nbsp;&nbsp;&nbsp;1267JP</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab5"><span class="dyna-underline">SPEC Card</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The SPEC card specifies the four basic data necessary for any run:</p>
<ul class="dyna-numlist">
<li>DT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the interval of time between J and K (see Section 2.7)</li><li>LENGTH&nbsp;&nbsp;&nbsp;&nbsp;the length of time for which the model should be run</li><li>PRTPER&nbsp;&nbsp;&nbsp;&nbsp;the interval of time between tabulating the results of the model</li><li>PLTPER&nbsp;&nbsp;&nbsp;&nbsp;the interval of time between plotting the results of the model</li></ul>
<p class="dyna-p1">The details of the punching are most easily understood by reference to the following example:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789.................................</span></p>
<p class="dyna-p2"><span class="dyna-tab21">SPEC&nbsp;&nbsp;DT=0.1/LENGTH=100/PRTPER=3/PLTPER=1</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The order of the four items must be as shown, and all must be included. The rules for the numerical values are on page 26. No space may be included in the</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page32text = `<div class="dyna-topline">
<span class="left-align">direction cards</span>
<span class="right-align">29</span>
</div>
<p class="dyna-p2">information, and the rule of the final space applies. Note that there is no slash immediately preceding the final space.</p>
<p class="dyna-p1">For internal reasons in DYNAMO, the larger of PRTPER and PLTPER should be an integral multiple of the smaller. For example, PRTPER might be chosen two or three times PLTPER, but should not be chosen 2.5 times PLTPER. In addition, both PRTPER and PLTPER should be an integral multiple of DT.</p>
<p class="dyna-p1">Two special features in DYNAMO are controlled by the SPEC card. Either printing or plotting may be suppressed, even though the model includes both PRINT card(s) and PLOT card(s), by setting the appropriate one of PRTPER or PLTPER equal to 0.</p>
<p class="dyna-p1">The other feature is that the original run may be suppressed by omitting the SPEC card until the first rerun. This is useful if the model builder wishes to keep a basic model and make all runs (actually reruns) as modifications of it. Of course only constants may be modified in these reruns.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab5"><span class="dyna-underline">PRINT Cards</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">DYNAMO can print any quantity desired in the tabular form shown in Figure 2-1. If the quantity is a level, auxiliary, or supplementary, the value corresponds to the instant .K; if the quantity is a rate, to the interval .KL.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab2">TIME</span><span class="dyna-tab5">LEV</span><span class="dyna-tab5">INV</span></p>
<p class="dyna-p3"><span class="dyna-tab11"></span>AUX<span class="dyna-tab13"></span>BXCR*1</p>
<p class="dyna-p3">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
<p class="dyna-p3"><span class="dyna-tab2"></span>E+00<span class="dyna-tab5"></span>E+03<span class="dyna-tab5"></span>E+06</p>
<p class="dyna-p3"><span class="dyna-tab11"></span>E-06<span class="dyna-tab14"></span>E+03</p>
<p class="dyna-p3">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
<p class="dyna-p3"><span class="dyna-tab4"></span>.00<span class="dyna-tab2"></span>2000.0<span class="dyna-tab5"></span>25.000</p>
<p class="dyna-p3"><span class="dyna-tab9"></span>-.0127<span class="dyna-tab16"></span>87.</p>
<p class="dyna-p3">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
<p class="dyna-p3"><span class="dyna-tab3"></span>1.00<span class="dyna-tab2"></span>1973.8<span class="dyna-tab5"></span>25.724</p>
<p class="dyna-p3"><span class="dyna-tab9"></span>-.0128<span class="dyna-tab16"></span>88.</p>
<p class="dyna-p3">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab7"></span>Figure 2-1 Sample of DYNAMO tabular output.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">TIME is automatically printed by itself in the leftmost column. The user may specify up to 10 quantities in each of the 14 remaining columns. The name of the quantity being tabulated is automatically printed at the top of each page. The scale factors (see next page) are printed on the first page under the names. The data follow with dashes separating the data corresponding to different times.</p>
<p class="dyna-p1">Quantities that are to be printed are specified according to the column in which they are to appear. The column number (1 through 14) is given followed by a right parenthesis. The quantities to appear in that column follow in order, separated by commas. (If a blank is desired in some line, an asterisk is used in place of a quantity name. Every asterisk must be counted as one of the ten entries permitted in a column.) Information pertaining to one column is separated from information for another by a slash, but no slash is used following the word PRINT or preceding the final space. For example, the tabular form shown above might have been the result of the following PRINT card:</p>
<div class="dyna-blankline">&nbsp;</div>
`
const page33text = `<div class="dyna-topline">
<span class="left-align">30</span>
<span class="right-align">reference manual</span>
</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789.........................</span></p>
<p class="dyna-p2"><span class="dyna-tab21">PRINT 1)LEV,AUX/2)INV/3)*,BXCR*1</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">No space may be included within the information, and the rule of the final space applies. If all the information will not fit on one PRINT card, continuation cards (see page 25) may be used or the information may be subdivided to fit on several PRINT cards (with a final space on each). If there are several references to a particular column, the quantities listed first are printed above those listed later. The order in which the columns are specified is arbitrary.</p>
<p class="dyna-p1"><span class="dyna-underline">Scaling of Quantities for Printing.</span>  As DYNAMO prints but 5 significant figures, very large or very small numbers must be divided by some power of 10 before printing so that the 5 significant figures will suffice. Such division before printing is called scaling.</p>
<p class="dyna-p1">These scale factors are printed on the first page following the quantity names. They appear as the letter E followed by the power of 10. As the results were divided by this power of 10 before printing, they must be multiplied by this power of 10 in order to reconstruct the original number. For example, LEV in Figure 2-1 has a scale factor of E+03, which means that the value of 2000.0 indicated for time 0 should be multiplied by 10<sup>+3</sup> or 1000 to reconstruct the initial value of LEV. Thus the value of LEV was 2 million at TIME equal to 0.</p>
<p class="dyna-p1">If desired, DYNAMO will calculate these scale factors and the position of the decimal point. However, some users prefer to ensure that the scale factors and positions of the decimal point do not vary between runs. This can be achieved by following the quantity name with the power of 10 by which the quantity should be divided before printing and with the number of decimal places that are desired to the right of the decimal point. These numbers should be enclosed in parentheses and separated by a decimal point. If the power of 10 is positive, the sign may be omitted. As an example, if every quantity in Figure 2-1 had its scale factor specified, the PRINT card (with the columns deliberately taken out of order) might have been</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789............................................</span></p>
<p class="dyna-p2"><span class="dyna-tab21">PRINT 3)BXCR*1(3.0)/2)INV(+6.3)/1)LEV(3.1),AUX(-6.4)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">If a quantity for which the DYNAMO user has specified the scaling is too large for that scale, DYNAMO will rescale the number and replace the fifth digit with a letter corresponding to the new scaling. Appendix A lists the scaling corre- sponding to these letters.</p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab5"><span class="dyna-underline">PLOT Cards</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">In addition to tabulating the results, DYNAMO will plot the results (versus TIME) using the same printer as for the tabulation. (Figure 1-3, page 13 is an example.) Much flexibility is available in these plots. The user specifies which quantities shall have the same scales and has the option of either specifying the scales or letting DYNAMO choose the scales so that all the data are on scale.</p>
<p class="dyna-p1">Each quantity name is followed by an equality sign and the character that is to identify it on the graph. Quantities that are to be plotted to the same scale are separated by commas. Quantities or groups of quantities that are to be plotted to different scales are separated by slashes. For example,</p>
<div class="dyna-blankline">&nbsp;</div>
`
const page34text = `<div class="dyna-topline">
<span class="left-align">direction cards</span>
<span class="right-align">31</span>
</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789...............</span></p>
<p class="dyna-p2"><span class="dyna-tab21">PLOT</span><span class="dyna-tab2">RPQ=R,TUV=T/XYZ=X</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">In the preceding example, RPQ and TUV are plotted on the same scale, while XYZ is plotted on its own scale. If the DYNAMO user wishes to specify the scale, he follows the quantity name and plotting character (of the last quantity in the group with the same scale) by a left parenthesis, the lower limit, comma, upper limit, and a right parenthesis. If he would like DYNAMO to set one of the two limits, he puts an asterisk in place of that limit value. For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789...........................................</span></p>
<p class="dyna-p2"><span class="dyna-tab21">PLOT</span><span class="dyna-tab2">AUX=A,ABC=C/XYZ=X(0,*)/TUV=T,BXCR*3=B(0.1000)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">In this example, AUX and ABC are plotted with the same scale limits, and these limits are set by DYNAMO. XYZ is plotted on its own scale, and while the lower limit is 0, the upper limit is chosen by DYNAMO. TUV and BXCR*3 are plotted on a scale running from 0 to 1000.</p>
<p class="dyna-p1">More than one plot may be specified by using additional PLOT cards.  No more than 10 quantities may be specified on any one plot,† but a particular quantity may be specified on any number of plots. No spaces may be included within the information, and the rule of the final space applies (see page 25). Continuation cards may be used.More than one plot may be specified by using additional PLOT cards.  No more than 10 quantities may be specified on any one plot,† but a particular quantity may be specified on any number of plots. No spaces may be included within the information, and the rule of the final space applies (see page 25). Continuation cards may be used.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab5"><span class="dyna-underline">NOTE Cards</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">DYNAMO prints all the equation cards and direction cards preceding the printed and plotted results so that a DYNAMO user can be certain which set of equations produced the results. It is sometimes convenient to insert a line of remarks or comments along with the equation cards (in addition to the comments on the cards proper mentioned on page 26). Such remarks may be punched on a NOTE card, starting in column 7 or later and ending before column 73. Any number of spaces may be used. No continuation cards are permitted, but a remark may be continued on additional NOTE cards. A NOTE card is identified by "NOTE" punched in columns 1 through 4. The word NOTE will be omitted when DYNAMO prints the NOTE card.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789...............................</span></p>
<p class="dyna-p2"><span class="dyna-tab21">NOTE</span><span class="dyna-tab15">MANUFACTURING SECTOR</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab5"><span class="dyna-underline">NOISE Cards</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">As described on page 35, the random numbers in DYNAMO are generated from a sequence of "pseudorandom numbers." This sequence will always start at the same point unless a NOISE card is included in the run or rerun.  The</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote">† There is also a limit to the space available to store plotting specifications:</p>
<p class="dyna-footnote"><span class="dyna-tab10">2x + 3m + n ≤ 200</span></p>
<p class="dyna-footnote"><span class="dyna-tab5">where</span></p>
<p class="dyna-footnote"><span class="dyna-tab10">x = total number of variables to be plotted</p>
<p class="dyna-footnote"><span class="dyna-tab10">m = total number of scales</p>
<p class="dyna-footnote"><span class="dyna-tab10">n = number of PLOT cards (not counting continuation cards)</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page35text = `<div class="dyna-topline">
<span class="left-align">32</span>
<span class="right-align">reference manual</span>
</div>
<p class="dyna-p2">NOISE card is punched by punching "NOISE=" in columns 1 through 6 followed by 12 octal digits in columns 7 through 18. The first digit must be less than 4 and the last must be odd.† For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789..........</span></p>
<p class="dyna-p2"><span class="dyna-tab21">NOISE=300336163251</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">2.4&nbsp;&nbsp;<span class="dyna-underline">Order of Cards</span>;&nbsp;<span class="dyna-underline">Runs and Reruns</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">A basic run consists of an Identification card followed immediately by a RUN card and the model (Equation cards, PRINT cards, PLOT cards, and so on). Within the model the order of the cards is arbitrary except for continuation cards (see page 25). DYNAMO automatically sets up the order of computation so that any quantity which depends on any other quantity at the same time step is computed after the other quantity.</p>
<p class="dyna-p1">Quantities that depend on other quantities of the same type at the same time step can occur only among the auxiliaries and supplementaries and among the N-type equations (initial values and computed constants).‡ If DYNAMO cannot reorder the computation to avoid a simultaneous solution, DYNAMO prints out SIMULTANEOUS EQNS AMONG and lists the quantities it cannot satisfactorily reorder.</p>
<p class="dyna-p1">If it is desired, the same model may be rerun one or more times with different values of any of the given constants (or with a different initial value of NOISE) without repeating the basic model specification or making the computer regenerate the code for the model.  Only C cards and direction cards (except the identification card) may be used.  If a PRINT card is included, the whole previous If a PRINT card is included, the whole previous PRINT request is erased.  The same is true of a PLOT card and the entire previous PLOT request.</p>
<p class="dyna-p1">The order of the cards in any rerun is arbitrary except that the RUN card must be first and any continuation cards must be in their usual order.</p>
<p class="dyna-p1">If more than one rerun is included, all given constants are changed back to the values they had in the first run before any new changes are recorded. Thus if ABC, a given constant, is 10 in the basic run and is to be 20 in two reruns, both reruns must contain C cards that set it equal to 20.</p>
<p class="dyna-p1">On the other hand, the PRINT and PLOT requests and the constants on a SPEC card are based on the most recent alteration; that is, they are not restored to their initial condition in the first run.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">2.5&nbsp;&nbsp;<span class="dyna-underline">Boxcars and Boxcar Trains</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">To permit the storage and later use of historical data, two "boxcar train" functions have been included in DYNAMO. (Boxcar is not a very descriptive term, but usage forces its continuance.) A boxcar train consists of a series of boxcars, or cells, where information can be stored chronologically. Periodically, the contents of the boxcars are shifted,†† the contents of the first becoming the</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote">†  A number of values are recommended in the Industrial Dynamics Memo D-36, "Random Number Generators Used in DYNAMO," Phyllis Fox, M.I.T., April 22, 1959.</p>
<p class="dyna-footnote">‡   Two special problems with reordering are discussed on page 36 and page 40.</p>
<p class="dyna-footnote">††  The first shift occurs at TIME = 0.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page36text = `<div class="dyna-topline">
<span class="left-align">boxcars and boxcar trains</span>
<span class="right-align">33</span>
</div>
<p class="dyna-p3">contents of the second, the contents of the second becoming the contents of the third, and so on. There are two choices for contents of the first boxcar following a shift: the former contents of the last boxcar (cyclic shift) or zero (linear shift). Figure 2-2 shows the two shifts diagrammatically. The cyclic shift is useful for keeping (and updating) seasonal data, while the linear shift provides a convenient way to construct pipeline delays.</p>
<div class="svg-fullwidth">
  <svg class="svg-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" width="1200" height="260">
  <style>
    .strkclr { fill: none; stroke: #523a28; stroke-width: 2; }
    .circleclr { fill: #523a28; stroke: none; }
    .arrowhead-line { stroke-width: 1.33; }
  </style>
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
  <path d="M 0,0 L 6,3 L 0,6" class="strkclr arrowhead-line"/>
    </marker>
  </defs>
  <rect x="20" y="105" width="70" height="70" class="strkclr"/>
  <rect x="120" y="105" width="70" height="70" class="strkclr"/>
  <rect x="220" y="105" width="70" height="70" class="strkclr"/>
  <rect x="420" y="105" width="70" height="70" class="strkclr"/>
  <rect x="580" y="105" width="70" height="70" class="strkclr"/>
  <rect x="680" y="105" width="70" height="70" class="strkclr"/>
  <rect x="780" y="105" width="70" height="70" class="strkclr"/>
  <rect x="980" y="105" width="70" height="70" class="strkclr"/>
  <text x="55" y="200" text-anchor="middle" font-family="monospace" font-size="18">1</text>
  <text x="155" y="200" text-anchor="middle" font-family="monospace" font-size="18">2</text>
  <text x="255" y="200" text-anchor="middle" font-family="monospace" font-size="18">3</text>
  <text x="615" y="200" text-anchor="middle" font-family="monospace" font-size="18">1</text>
  <text x="715" y="200" text-anchor="middle" font-family="monospace" font-size="18">2</text>
  <text x="815" y="200" text-anchor="middle" font-family="monospace" font-size="18">3</text>
  <path d="M 480,98 Q 260,-32 40,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <path d="M 66,98 Q 105,72 144,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <path d="M 166,98 Q 205,72 244,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <path d="M 266,98 Q 305,72 344,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <path d="M 366,98 Q 405,72 444,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <path d="M 626,98 Q 665,72 704,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <path d="M 726,98 Q 765,72 804,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <path d="M 826,98 Q 865,72 904,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <path d="M 926,98 Q 965,72 1004,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <path d="M 1026,98 Q 1065,72 1098,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <circle cx="338" cy="140" r="2.5" class="circleclr"/>
  <circle cx="355" cy="140" r="2.5" class="circleclr"/>
  <circle cx="372" cy="140" r="2.5" class="circleclr"/>
  <circle cx="898" cy="140" r="2.5" class="circleclr"/>
  <circle cx="915" cy="140" r="2.5" class="circleclr"/>
  <circle cx="932" cy="140" r="2.5" class="circleclr"/>
  <text x="602" y="78" text-anchor="middle" font-family="monospace" font-size="18">Zero</text>
  <path d="M 580,72 Q 560,77 590,95" class="strkclr" marker-end="url(#arrowhead)"/>
  <text x="248" y="230" text-anchor="middle" font-family="monospace" font-size="18">Cyclic shift</text>
  <text x="870" y="230" text-anchor="middle" font-family="monospace" font-size="18">Linear shift</text>
  <g transform="matrix(0.1,0,0,-0.1,1070,202)">
  <path d="m 824,1052 c -63,-24 -81,-26 -216,-24 -137,2 -150,0 -200,-23 -37,-17 -70,-25 -111,-25 -75,0 -115,-18 -160,-70 -33,-38 -37,-50 -37,-96 0,-29 -4,-63 -9,-76 C 42,608 39,542 80,455 c 16,-34 26,-76 30,-132 3,-45 9,-85 13,-89 3,-3 35,-12 71,-20 36,-7 81,-22 101,-33 30,-16 50,-18 143,-14 97,5 114,3 181,-21 126,-44 209,-30 301,51 25,22 59,43 77,47 22,5 48,26 82,65 27,31 60,62 73,70 30,15 58,61 58,91 0,13 -18,51 -40,86 -45,71 -50,109 -21,146 48,60 32,118 -52,192 -29,25 -74,65 -101,88 -26,24 -52,53 -56,64 -13,32 -39,34 -116,6 z m 128,-64 c 35,-35 77,-73 93,-85 96,-69 125,-131 87,-183 -34,-46 -37,-74 -11,-127 12,-27 31,-59 41,-72 28,-37 23,-78 -14,-109 -34,-29 -78,-72 -116,-115 -12,-14 -36,-29 -53,-32 -17,-4 -53,-27 -81,-52 -27,-24 -61,-49 -75,-54 -36,-14 -140,-11 -176,5 -77,33 -116,39 -211,32 -83,-6 -99,-5 -133,13 -22,10 -57,22 -78,26 -89,14 -82,7 -87,92 -3,59 -11,92 -32,132 -40,81 -43,124 -12,214 14,41 26,95 26,120 0,50 18,92 54,126 20,19 41,25 103,31 47,4 98,16 128,29 40,19 64,23 125,21 158,-6 214,-1 285,24 39,14 71,25 72,25 1,1 30,-27 65,-61 z" class="circleclr" />
  </g>
  <text x="1130" y="146" text-anchor="middle" font-family="monospace" font-size="18">Discard</text>
  </svg>
</div>
<div class="dyna-caption">Figure 2-2 Types of shifts.</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The name of a train is chosen according to the same rule as any other quantity name, that is, 5 or fewer alphabetic or numerical characters, the first of which is alphabetic. A particular boxcar in a train is specified by following the name of the train with an asterisk and the number of the boxcar desired. For example, the third boxcar in the train called ABCD is ABCD*3. If the boxcar has a time subscript (as it generally does), the subscript will follow the number, for example, ABCD*3.K.</p>
<p class="dyna-p1">The method for transferring data from a train to another part of a model is to use the name of the appropriate <span class="dyna-underline">boxcar</span> on the right of any equation <span class="dyna-underline">except an N-equation.</span> For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789.................</span></p>
<p class="dyna-p2"><span class="dyna-tab21">12A<span class="dyna-tab3">AUX.K=(C)(ABCD*7.K)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Data are entered into the train by writing a level (or occasionally an auxiliary) equation for the first (or any) boxcar. For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">COLUMN</span><span class="dyna-tab4">123456789..........................</span></p>
<p class="dyna-p2"><span class="dyna-tab21">IL<span class="dyna-tab4">ABCD*1.K=ABCD*1.J+(DT)(RATE.JK+0)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The two boxcar functions that create the train and specify the number of cars and the frequency of shifting are:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">35B</span><span class="dyna-tab4">V=BOXCYC(N,P)</span><span class="dyna-tab15">(CYCLIC SHIFT)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">37B</span><span class="dyna-tab4">V=BOXLIN(N,P)</span><span class="dyna-tab15">(LINEAR SHIFT)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">where V is the name of the boxcar train and N is the number of boxcars. N must be a numerical value and may <span class="dyna-underline">not exceed 31</span>. The shifting interval P may be either a numerical value or a quantity name.</p>
<p class="dyna-p1">Every boxcar train must have initial values specified for each boxcar. These values may be specified by either a C card or the BOXLOAD equation type. In the case of the C card (see page 26), the number of initial values specified must agree with the number of boxcars in the train.</p>
<p class="dyna-p1">If every car in the train is to be given the same initial value, the BOXLOAD may be used:</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page37text = `<div class="dyna-topline">
<span class="left-align">34</span>
<span class="right-align">reference manual</span>
</div>
<p class="dyna-p2"><span class="dyna-tab12">36N</span><span class="dyna-tab4">V=BOXLOAD(±P,±Q)</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">where V is the name of the train to be loaded. Each car in V will be given the initial value of the product of P and Q. Note that the BOXLOAD equation type does not require the inclusion of the number of boxcars in the train.</p>
<p class="dyna-p1">(Caution: If the initial value of the train is a C card, an asterisk must follow the name of the train on the C card, but if the BOXLOAD function is used, no asterisk is used following the name on the N-equation card.)</p>
<p class="dyna-p1">As an example, a 20-week pipeline delay<sup> †</sup> will be constructed. In order to have a dynamic input whose characteristics require no explanation, TIME will be used for this example. It will be delayed in a train with 11 cars that are shifted linearly every 2 weeks. (Eleven cars are required because the first car will have roughly the current value of TIME, the second, TIME 2 weeks ago, and so on, until the eleventh car, which will contain TIME 20 weeks earlier.)</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">37B</span><span class="dyna-tab4">TRN=BOXLIN(11,12)</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The average value of the input over the 2-week interval between shifts is to be entered into the first car. This can be calculated by a level equation that permits a 2-week divisor:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">52L</span><span class="dyna-tab4">TRN*1.K=TRN*1.J+(DT)(1/2)(TIME.J+0)</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The initial values of the train will be chosen to behave as though the train had been operating prior to TIME = 0. As the first shift will occur at TIME = 0, the first car must contain initially the average value of TIME for the interval -2 to 0 or -1. The second car will contain the average TIME for the previous interval (-4 to -2 or -3). Initial values will be similarly chosen for the remaining cars.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">C</span><span class="dyna-tab6">TRN*=-1/-3/-5/-7/-9/-11/-13/-15/-17/-19/-21</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">TRN*11.K or TRN*11.3" can be used wherever the delayed value of TIME is desired.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">2.6&nbsp;&nbsp;<span class="dyna-underline">Special Functions</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">Common Functions</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">There are five common functions available in DYNAMO: exponential, natural logarithm, square root, sine, and cosine. All these functions behave exactly as described in elementary courses in calculus. The exact punching format of each function includes a multiplier P, which may be a variable or a constant. If this multiplier is not needed, the number 1 should be punched in place of the letter P.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">28</span><span class="dyna-tab5">V=(±P)EXP(±Q)V=(±P)EXP(±Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">V = P<sup> Q</sup></span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">29</span><span class="dyna-tab5">V=(±P)LOGN(±Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">V = P ln Q</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><sup>†</sup>&nbsp;A pipeline delay might also be called a perfect delay because a step input results in a step in the output rather than a gradual rise to the new level, as occurs in the first or third order delays. See Chapter 9 of <span class="dyna-underline">Industrial Dynamics.</span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page38text = `<div class="dyna-topline">
<span class="left-align">special functions</span>
<span class="right-align">35</span>
</div>
<p class="dyna-p2"><span class="dyna-tab12">30</span><span class="dyna-tab5">V=(±P)SQRT(±Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab19">V = P√Q</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">31</span><span class="dyna-tab5">V=(±P)SIN((2PI)(±Q)/±R)
</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab15">V = P sin <svg class="svgplacement02" width="60" height="32" xmlns="http://www.w3.org/2000/svg" >
<style id="style1">
    .equation-text { font-family: monospace; fill: #523a28; }
    .equation-line { stroke: #523a28; stroke-width: 1;  }
</style>
<text x="-1.9" y="25.8" font-size="32px" class="equation-text" >(</text>
<text x="15.1" y="12.4" font-size="16px" class="equation-text" >2πQ</text>
<line x1="9.7" y1="15.8" x2="49.7" y2="15.8" class="equation-line" />
<text x="25.5" y="30.7" font-size="16px" class="equation-text" >R</text>
<text x="42.6" y="25.8" font-size="32px" class="equation-text" >)</text></svg></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">32</span><span class="dyna-tab5">V=(±P)COS((2PI)(±Q)/±R)
</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab15">V = P cos <svg class="svgplacement02" width="60" height="32" xmlns="http://www.w3.org/2000/svg" >
<style id="style1">
    .equation-text { font-family: monospace; fill: #523a28; }
    .equation-line { stroke: #523a28; stroke-width: 1;  }
</style>
<text x="-1.9" y="25.8" font-size="32px" class="equation-text" >(</text>
<text x="15.1" y="12.4" font-size="16px" class="equation-text" >2πQ</text>
<line x1="9.7" y1="15.8" x2="49.7" y2="15.8" class="equation-line" />
<text x="25.5" y="30.7" font-size="16px" class="equation-text" >R</text>
<text x="42.6" y="25.8" font-size="32px" class="equation-text" >)</text></svg></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p1">The sine and cosine functions will frequently be used to generate functions of TIME. In such cases P will be the amplitude, TIME will replace Q, and R will be the period of the sine function. For example,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">31A</span><span class="dyna-tab5">INPUT.K=(AMPL)SIN((2PI)(TIME.K)/PERD)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Random Numbers</span></p>
<p class="dyna-p1">DYNAMO generates random numbers by computing a sequence of "pseudo-random numbers." A sequence of pseudorandom numbers is a sequence of numbers which satisfies all statistical tests of randomness, but in which each number is calculated from the previous one. That is, if we know the generation procedure and one number in the sequence, we can calculate the next number in the sequence and thus all the numbers in the sequence, in complete violation of the principle of randomness. On the other hand, anyone unfamiliar with the generation procedure cannot detect that these numbers are not completely random.</p>
<p class="dyna-p1">There are two random-number functions in DYNAMO.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">33</span><span class="dyna-tab5">V=(P)NOISE</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">gives V as random numbers uniformly distributed between -P/2 and +P/2. The numbers are <span class="dyna-underline">not</span> restricted to being integers and, in fact, will very seldom be integers.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">34</span><span class="dyna-tab5">V=(±P)NORMRN(+Q,R)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">gives V as the product of ±P times random numbers normally distributed (normal deviates) with mean ±Q and standard deviation R. NORMRN starts with a number from the same generator that Equation Form 33 above uses and then alters it to conform to a normal distribution by the method described in Memo D-36.<sup> †</sup> The alteration scheme does not produce a perfectly normal distribution. In particular, no numbers will exceed 2.4 standard deviations.</p>
<p class="dyna-p1">There are occasions when the user wishes the same sequence of random numbers and other occasions when he wishes a different sequence. To achieve either case, the following must be considered. In every DT, each equation using Equation Form 33 or 34 obtains the next random number in the sequence from the random- number generator (a different number for each equation). As DYNAMO restarts</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup>Op. cit., page 3.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page39text = `<div class="dyna-topline">
<span class="left-align">36</span>
<span class="right-align">reference manual</span>
</div>
<p class="dyna-p3">the sequence for each run or rerun (if there is no NOISE card), the sequence of numbers used by these equations will be the same. If DT is changed, the sequence will correspond to different times and will be essentially different. If the order or number of the equations utilizing Equation Form 33 or 34 in the model is changed between runs, the sequence used by a particular equation will be different. (If these equations are used to define auxiliaries, the DYNAMO user must be careful to make no changes in the model that cause DYNAMO, in the process of reordering auxiliaries, to order these equations differently from the earlier model.)</p>
<p class="dyna-p1">Thus, if the user wishes to run a model with the same sequence of random numbers but with different constants or equations, he must keep DT and the number and order of Equation Forms 33 and 34 the same. If, on the other hand, he wishes a different sequence of random numbers, he should use a NOISE card (see page 31) to alter the initial position in the sequence of random numbers.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Third-Order Delay</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">39R</span><span class="dyna-tab5">V=DELAY3(±P,C)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">where</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-tab11">V = output rate from the delay</span></p>
<p class="dyna-p3"><span class="dyna-tab11">Р = input to the delay</span></p>
<p class="dyna-p3"><span class="dyna-tab11">C = delay constant</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The third-order delay is a shorthand notation for seven DYNAMO equations.<sup> †</sup> These seven equations are three cascaded first-order delays and their initial conditions.</p>
<p class="dyna-p1">The constant C must be either a given or computed constant. The input P must have an initial value. An N equation for V is included in the seven equations provided by DYNAMO. Thus if another N equation is included in the model for V, there will be an error recognized by DYNAMO. For example, if the output of one delay flows into another delay, an initial-value equation is required for the first delay, but the first delay (that is, DYNAMO) will provide the necessary initial-value equation for the input to the second.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Pulse Source</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">41(A OR R)</span><span class="dyna-tab5">V=PULSE(±P,Q,R)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> The seven equations are:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><span class="dyna-tab9">40R</span><span class="dyna-tab5">V.KL=V.JK+(1/*003)(*001.JK-V.JK)</span></p></span></p>
<p class="dyna-footnote"><span class="dyna-tab9">40R</span><span class="dyna-tab5">*001.KL=*001.JK+(1/*003)(*002.JK-*001.JK)</span></p>
<p class="dyna-footnote"><span class="dyna-tab9">40R</span><span class="dyna-tab5">*002.KL=*002.JK+(1/*003)(P.JK-*002.JK)</span></p>
<p class="dyna-footnote"><span class="dyna-tab9">42N</span><span class="dyna-tab5">*003=C/((3)(DT))</span></p>
<p class="dyna-footnote"><span class="dyna-tab9">6N</span><span class="dyna-tab6">V=P</span></p>
<p class="dyna-footnote"><span class="dyna-tab9">6N</span><span class="dyna-tab6">*001=P</span></p>
<p class="dyna-footnote"><span class="dyna-tab9">6N</span><span class="dyna-tab6">*002=P</span></p>
<p class="dyna-footnote2">where *001, *002, and *003 are names of quantities created by DYNAMO. (The
input P was assumed to be a rate.)</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page40text = `<div class="dyna-topline">
<span class="left-align">special functions</span>
<span class="right-align">37</span>
</div>
<p class="dyna-p3">where V is a pulse train in which the pulses are of width DT and height P.<sup> †</sup> The first pulse appears at time Q, and subsequent pulses appear at TIME = Q + R, Q + 2R, Q + 3R, and so on.</p>
<p class="dyna-p1">Note that P can be a variable and thus give a variable height to the pulses, and that Q and R, which determine the pulse spacing, may also be variables. If Q and R are variables, the pulse times are determined by the method described on page 41.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Step Function</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">45(A OR R)</span><span class="dyna-tab9">V=STEP(±P,Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab18">V = <span class="dyna-smalltext">initial value</span></span><span class="right-align"><span class="dyna-smalltext">if</span> TIME \< Q</span><span class="dyna-tab28">&nbsp;</span></p>
<p class="dyna-p2"><span class="dyna-tab18">V = P</span><span class="right-align"><span class="dyna-smalltext">if</span> TIME <span class="dyna-underline">\></span> Q</span><span class="dyna-tab28">&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Both P and Q may be variables.  If Q is a variable, the step time is determined by the method described on page 41. If P is a variable, the step function has the effect of a gate function that "opens" the gate allowing V to equal P after time Q. The value V will equal the initial value (or 0 if no initial value is provided) until the step time.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Ramp Function</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">47(A OR R)</span><span class="dyna-tab9">V=RAMP(±P,Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab21">V = <span class="dyna-smalltext">initial value</span></span><span class="right-align"><span class="dyna-smalltext">if</span> TIME <span class="dyna-underline">\<</span> Q</span><span class="dyna-tab10">&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab21">V = <span class="dyna-smalltext">initial value</span> +</span>
<svg  class="svgplacement03" width="45" height="80" xmlns="http://www.w3.org/2000/svg">
<style type="text/css">
    .text-monospace { fill: #523a28; font-family: monospace; }
    .text-summation { fill: #523a28; font-family: 'courier'; }
</style>
    <text x="4.413" y="15.87" class="text-monospace" font-size="15.08px" style="stroke-width:1.0">TIME</text>
    <text x="16.42" y="46.52" class="text-summation" font-size="44.06px" transform="scale(0.8030,1.245)" style="stroke-width:1.088">Σ</text>
    <text x="2.813" y="74.5" class="text-monospace" font-size="14.95px" style="stroke-width:1.0">Q</text>
    <text x="14.55" y="74.5" class="text-monospace" font-size="14.95px" style="stroke-width:1.0">+</text>
    <text x="25.72" y="75.5" class="text-monospace" font-size="14.95px" style="stroke-width:0.9969">DT</text>
</svg>
<span class="right-align">(P)(DT)<span class="dyna-tab5">&nbsp;</span><span class="dyna-smalltext">if</span> TIME \> Q</span><span class="dyna-tab10">&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">If P and Q are both constants, V is merely a ramp with slope P that starts at time Q. If Q is a variable, the ramp time is determined by the method discussed on page 41. If P is a variable, V is DT times the sum of all P since the time Q (plus the initial value). The initial value will be assumed 0 unless given.</p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Sampler</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">43(A OR R)</span><span class="dyna-tab9">V=SAMPLE(±P,Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">where V is set equal to P at sample times separated by intervals of length Q. If Q is a constant, these times are of course Q, 2Q, 3Q, and so on. Variable sample times are discussed on page 41. If an initial-value equation is provided for V, V will have that value until the first sample time. Otherwise, it will be O until the first sample time.</p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> A reader familiar with the term "impulse" should be careful to note that P is the height of the pulse and not the area under the pulse. If he wants a train of impulses of area P, he should use the combination</p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-footnote"><span class="dyna-tab12">20</span><span class="dyna-tab5">S=P/DT</span></p>
<p class="dyna-footnote"><span class="dyna-tab12">41</span><span class="dyna-tab5">V=PULSE(S,Q,R)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote2">with the appropriate variable types and subscripts.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page41text = `<div class="dyna-topline">
<span class="left-align">38</span>
<span class="right-align">reference manual</span>
</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Maximum Function</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">56</span><span class="dyna-tab5">V=MAX(±P,±Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab20">V = P</span><span class="dyna-tab4"><span class="dyna-smalltext">if</span> P <span class="dyna-underline">\></span> Q</span></p>
<p class="dyna-p2"><span class="dyna-tab20">V = Q</span><span class="dyna-tab4"><span class="dyna-smalltext">if</span> P \< Q</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">where P and Q need not be distinct.  In particular, setting Q equal to -P sets V equal to the absolute value of P.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Minimum Function</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">54</span><span class="dyna-tab5">V=MIN(±P,±Q)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab20">V = P</span><span class="dyna-tab4"><span class="dyna-smalltext">if</span> P \< Q</span></p>
<p class="dyna-p2"><span class="dyna-tab20">V = Q</span><span class="dyna-tab4"><span class="dyna-smalltext">if</span> P <span class="dyna-underline">\></span> Q</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Clipping or Limiting Function</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">51</span><span class="dyna-tab5">V=CLIP(±P,±Q,±R,±S)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab20">V = P</span><span class="dyna-tab4"><span class="dyna-smalltext">if</span> R <span class="dyna-underline">\></span> S</span></p>
<p class="dyna-p2"><span class="dyna-tab20">V = Q</span><span class="dyna-tab4"><span class="dyna-smalltext">if</span> R \< S</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">where P, Q, R, S need not be distinct.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Switch Function</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab12">49</span><span class="dyna-tab5">V=SWITCH (±P,±Q,R)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab20">V = P</span><span class="dyna-tab4"><span class="dyna-smalltext">if</span> R = S</span></p>
<p class="dyna-p2"><span class="dyna-tab20">V = Q</span><span class="dyna-tab4"><span class="dyna-smalltext">if</span> R &#x2260; S</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">This function is especially useful for testing several decision rules by means of reruns. Both decision rules are included in the model, and the appropriate one is chosen by the SWITCH function in each run or rerun. In this instance R would be a given constant and would be 0 in one run and different from 0 in the other, for example, 1.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Table Functions</span></p>
<p class="dyna-p1">The DYNAMO user will occasionally desire to express a variable having a rather arbitrary relationship to another variable. Frequently this relationship can be expressed most easily by a graph or a table corresponding to the graph. Figure 2-3 shows such a graph. A table corresponding to the graph can be made</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="svgplacement04">
  <svg width="440" height="240" viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg">
  <marker id="arrowhead" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="7" markerHeight="7" orient="auto">
  <path d="M 0 0 L 12 6 L 0 12 z" fill="#523a28" />
  </marker>
  <path d="M 48 183 C 140 52, 242 87, 402 32" stroke="#523a28" fill="none" stroke-width="1.75"/>
  <line x1="16" y1="120" x2="420" y2="120" stroke="#523a28" stroke-width="1.5" marker-end="url(#arrowhead)" />
  <line x1="220" y1="225" x2="220" y2="18" stroke="#523a28" stroke-width="1.5" marker-end="url(#arrowhead)" />
  <text x="227" y="25" font-size="14px" font-weight="400" fill="#523a28">Y</text>
  <text x="413" y="138" font-size="14px" font-weight="400" fill="#523a28">X</text>
  </svg>
</span>&nbsp;&nbsp;<span class="svgplacement04">
  <svg width="440" height="240" viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg">
  <marker id="arrowhead" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="7" markerHeight="7" orient="auto">
  <path d="M 0 0 L 12 6 L 0 12 z" fill="#523a28" />
  </marker>
  <path d="M 48 183 C 140 52, 242 87, 402 32" stroke="#523a28" fill="none" stroke-width="1.75"/>
  <line x1="16" y1="120" x2="420" y2="120" stroke="#523a28" stroke-width="1.5" marker-end="url(#arrowhead)" />
  <line x1="220" y1="123" x2="220" y2="18" stroke="#523a28" stroke-width="1.5" marker-end="url(#arrowhead)" />
  <line x1="220" y1="141" x2="220" y2="225" stroke="#523a28" stroke-width="1.5" />
  <line x1="55" y1="85" x2="55" y2="120" stroke="#523a28" stroke-width="1" />
  <line x1="55" y1="139" x2="55" y2="192" stroke="#523a28" stroke-width="1" />
  <line x1="111" y1="74" x2="111" y2="120" stroke="#523a28" stroke-width="1" />
  <line x1="111" y1="141" x2="111" y2="192" stroke="#523a28" stroke-width="1" />
  <line x1="165" y1="56" x2="165" y2="120" stroke="#523a28" stroke-width="1" />
  <line x1="165" y1="141" x2="165" y2="192" stroke="#523a28" stroke-width="1" />
  <line x1="275" y1="55" x2="275" y2="120" stroke="#523a28" stroke-width="1" />
  <line x1="275" y1="141" x2="275" y2="192" stroke="#523a28" stroke-width="1" />
  <line x1="330" y1="44" x2="330" y2="120" stroke="#523a28" stroke-width="1" />
  <line x1="330" y1="141" x2="330" y2="192" stroke="#523a28" stroke-width="1" />
  <line x1="385" y1="28" x2="385" y2="120" stroke="#523a28" stroke-width="1" />
  <line x1="385" y1="141" x2="385" y2="192" stroke="#523a28" stroke-width="1" />
  <line x1="56" y1="172" x2="190" y2="175" stroke="#523a28" stroke-width="1" stroke-dasharray="5,5"/>
  <line x1="165" y1="90" x2="198" y2="90" stroke="#523a28" stroke-width="1" stroke-dasharray="5,5"/>
  <line x1="226" y1="65" x2="275" y2="65" stroke="#523a28" stroke-width="1" stroke-dasharray="5,5"/>
  <line x1="223" y1="52" x2="330" y2="52" stroke="#523a28" stroke-width="1" stroke-dasharray="5,5"/>
  <line x1="226" y1="38" x2="385" y2="38" stroke="#523a28" stroke-width="1" stroke-dasharray="5,5"/>
  <text x="227" y="25" font-size="14px" font-weight="400" fill="#523a28">Y</text>
  <text x="413" y="138" font-size="14px" font-weight="400" fill="#523a28">X</text>
  <text x="381" y="135" font-size="12px" font-weight="400" fill="#523a28">3</text>
  <text x="326" y="135" font-size="12px" font-weight="400" fill="#523a28">2</text>
  <text x="271" y="135" font-size="12px" font-weight="400" fill="#523a28">1</text>
  <text x="216" y="135" font-size="12px" font-weight="400" fill="#523a28">0</text>
  <text x="157" y="135" font-size="12px" font-weight="400" fill="#523a28">-1</text>
  <text x="103" y="135" font-size="12px" font-weight="400" fill="#523a28">-2</text>
  <text x="47" y="135" font-size="12px" font-weight="400" fill="#523a28">-3</text>
  <text x="197" y="151" font-size="11px" font-weight="400" fill="#523a28">-10</text>
  <text x="197" y="179" font-size="11px" font-weight="400" fill="#523a28">-20</text>
  <text x="197" y="206" font-size="11px" font-weight="400" fill="#523a28">-30</text>
  <text x="201" y="94" font-size="11px" font-weight="400" fill="#523a28">10</text>
  <text x="201" y="69" font-size="11px" font-weight="400" fill="#523a28">20</text>
  <text x="201" y="42" font-size="11px" font-weight="400" fill="#523a28">30</text>
  <line x1="217" y1="90" x2="223" y2="90" stroke="#523a28" stroke-width="1" />
  <line x1="217" y1="65" x2="223" y2="65" stroke="#523a28" stroke-width="1" />
  <line x1="217" y1="38" x2="223" y2="38" stroke="#523a28" stroke-width="1" />
  <line x1="217" y1="147" x2="223" y2="147" stroke="#523a28" stroke-width="1" />
  <line x1="217" y1="175" x2="223" y2="175" stroke="#523a28" stroke-width="1" />
  <line x1="217" y1="202" x2="223" y2="202" stroke="#523a28" stroke-width="1" />
  </svg>
</span></p>
<div class="dyna-captionleft">
<span class="dyna-tab5">Figure 2-3 Relationship between</span><span class="dyna-tab12">Figure 2-4 Graph segmented to</span>
</div>
<div class="dyna-captionleft">
<span class="dyna-tab5">X and Y.</span><span class="dyna-tab36">make table.</span>
</div>
<div class="dyna-blankline">&nbsp;</div>
`

const page42text = `<div class="dyna-topline">
<span class="left-align">special functions</span>
<span class="right-align">39</span>
</div>
<p class="dyna-p3">by dividing the range of the independent variable (X) into equal segments and noting the corresponding values of the dependent variable (Y) as shown in Figure 2-4. The table corresponding to the graph can now be easily prepared by listing side by side the values of X and Y, as in Table 2-2.</p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-caption">Table 2-2 Corresponding Values of X and Y</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-centersvg">
<svg width="178" height="275" xmlns="http://www.w3.org/2000/svg">
  <style>
    .celltext { font-size: 16px; font-weight: 400; fill: #523a28; }
  </style>
  <path d="M1 1 L177 1 L177 274 L1 274 Z" stroke="#523a28" stroke-width="1.5" fill="none" />
  <path d="M1 274 L1 1 Z" stroke="#523a28" stroke-width="1" fill="none" />
  <line x1="1" y1="36" x2="177" y2="36" stroke="#523a28" stroke-width="1.5" />
  <line x1="89" y1="1" x2="89" y2="274" stroke="#523a28" stroke-width="1.5" />
  <text x="41" y="25" class="celltext">X</text>
  <text x="34" y="55" class="celltext">-3</text>
  <text x="34" y="90" class="celltext">-2</text>
  <text x="34" y="125" class="celltext">-1</text>
  <text x="43" y="160" class="celltext">0</text>
  <text x="33" y="195" class="celltext">+1</text>
  <text x="33" y="230" class="celltext">+2</text>
  <text x="33" y="265" class="celltext">+3</text>
  <text x="130" y="25" class="celltext">Y</text>
  <text x="116" y="55" class="celltext">-20</text>
  <text x="135" y="90" class="celltext">0</text>
  <text x="126" y="125" class="celltext">10</text>
  <text x="126" y="160" class="celltext">16</text>
  <text x="126" y="195" class="celltext">20</text>
  <text x="126" y="230" class="celltext">24</text>
  <text x="126" y="265" class="celltext">30</text>
</svg>
</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Unfortunately, DYNAMO cannot accept graphic input, but the table of numbers provides no problem. In fact, DYNAMO does not require both columns of numbers. As the left column has equal increments from one value to the next, DYNAMO requires only the first and last values and the size of the increment. The right column is arbitrary and must be provided in complete detail.</p>
<p class="dyna-p1">The exact punching format of the table look-up is</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">59</span><span class="dyna-tab6">V=TABLE(NAME,P,±N1,±N2,N3)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">V</span><span class="dyna-tab7">= dependent variable</span></p>
<p class="dyna-p2"><span class="dyna-tab11">NAME</span><span class="dyna-tab4">= name of table</span></p>
<p class="dyna-p2"><span class="dyna-tab11">P</span><span class="dyna-tab7">= independent variable</span></p>
<p class="dyna-p2"><span class="dyna-tab11">N1</span><span class="dyna-tab6">= lowest value of range of independent variable</span></p>
<p class="dyna-p2"><span class="dyna-tab11">N2</span><span class="dyna-tab6">= highest value of range of independent variable</span></p>
<p class="dyna-p2"><span class="dyna-tab11">N3</span><span class="dyna-tab6">= increment in independent variable</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">If Y in the previous example is an auxiliary, then the equation for Y would be</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">59A</span><span class="dyna-tab5">Y.K=TABLE(YTAB,X.K,-3,3,1)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">where YTAB is the name of the table for Y; YTAB would be given by a constant card (see page 26) as follows:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">C</span><span class="dyna-tab7">YTAB*=-20/0/10/16/20/24/30</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">Since DYNAMO has been given only a series of points along the curve shown in Figure 2-3 rather than the complete curve, it must have some procedure for generating values that it cannot find in the table. The procedure DYNAMO uses is to interpolate linearly between values (draw a straight line between the two closest values and select the answer from the straight line.) This means that the curve DYNAMO is using is the broken line shown in Figure 2-5.</p>
<div class="dyna-blankline">&nbsp;</div>
`
const page43text = `<div class="dyna-topline">
<span class="left-align">40</span>
<span class="right-align">reference manual</span>
</div>
<div class="dyna-flex">
<div class="svgplacement05" >
<svg width="340" height="210" viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg">
  <marker id="arrowhead" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="7" markerHeight="7" orient="auto">
  <path d="M 0 0 L 12 6 L 0 12 z" fill="#523a28" />
  </marker>
  <style>
    .dot { fill: #523a28 }
    .line { stroke: #523a28; stroke-width: 1 }
  </style>
  <line x1="5" y1="102" x2="320" y2="102" stroke="#523a28" stroke-width="1.5" marker-end="url(#arrowhead)" />
  <line x1="165" y1="188" x2="165" y2="25" stroke="#523a28" stroke-width="1.5" marker-end="url(#arrowhead)" />
  <text x="172" y="35" font-size="14px" font-weight="400" fill="#523a28">Y</text>
  <text x="315" y="122" font-size="14px" font-weight="400" fill="#523a28">X</text>
  <circle class="dot" cx="34" cy="145" r="2" />
  <circle class="dot" cx="78" cy="102" r="2" />
  <circle class="dot" cx="122" cy="80" r="2" />
  <circle class="dot" cx="165" cy="66" r="2" />
  <circle class="dot" cx="208" cy="60" r="2" />
  <circle class="dot" cx="253" cy="51" r="2" />
  <circle class="dot" cx="294" cy="38" r="2" />
  <path class="line" d="M36 143 L76 104" />
  <path class="line" d="M81 100 L119 82" />
  <path class="line" d="M125 79 L162 67" />
  <path class="line" d="M168 66 L205 60" />
  <path class="line" d="M211 59 L249 51" />
  <path class="line" d="M256 50 L291 39" />
</svg>
<p class="dyna-p3">Figure 2-5 Broken curve used</p>
<p class="dyna-p3">by DYNAMO</p>
</div>
<div class="dyna-wrap">
<p class="dyna-p1">The range of values of the independent variable during the computer run may not exceed the range provided by the table. Otherwise, DYNAMO will stop the computer run when the range is exceeded and will print the latest value of TIME, the value of the independent variable, and the name of the dependent variable.</p>
<p class="dyna-p1">Some curves have horizontal asymptotes, and should the range of the independent variable extend quite far along the asymptote, it becomes a chore to punch a table with one value repeated many times.</p> 
</div></div>
<p class="dyna-p3">To eliminate this task, DYNAMO has a second table look-up function that uses the extreme value in the table when the range is exceeded. The exact punching format is</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">58</span><span class="dyna-tab6">V=TABHL(NAME,P,+N1,+N2,N3)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">The explanation of the terms is the same as before.  In TABHL, HL signifies that the independent variable may exceed the <span class="dyna-underline">h</span>igh and <span class="dyna-underline">l</span>ow limits of the range provided for it.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Summing Functions</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">
<span class="dyna-tab12">53</span><span class="dyna-tab5">V=SUM1(N,P)</span>
<span class="dyna-tab9">V =</span>
<svg width="45" height="80" xmlns="http://www.w3.org/2000/svg" >
<style
  type="text/css"
  id="style1">
  .sumtext { fill: #523a28; font-size: 15px; stroke-width:1; font-family: monospace; }
  .sumsign { fill: #523a28; font-size: 44px; stroke-width:1.1; font-family: 'courier'; }
</style>
  <text x="18.41" y="15.9" class="sumtext" font-size="15px" >N</text>
  <text x="16.4" y="46.5" class="sumsign" transform="scale(0.8,1.25)" >Σ</text>
  <text x="8.2" y="74.5" class="sumtext" >i</text>
  <text x="17.4" y="74.5" class="sumtext" >=</text>
  <text x="26.7" y="75.6" class="sumtext" >1</text>
</svg>P<sub>i</sub></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">
<span class="dyna-tab12">55</span><span class="dyna-tab5">V=SUM2(N,P,Q)</span>
<span class="dyna-tab7">V =</span>
<svg width="45" height="80" xmlns="http://www.w3.org/2000/svg" >
<style
  type="text/css"
  id="style1">
  .sumtext { fill: #523a28; font-size: 15px; stroke-width:1; font-family: monospace; }
  .sumsign { fill: #523a28; font-size: 44px; stroke-width:1.1; font-family: 'courier'; }
</style>
  <text x="18.41" y="15.9" class="sumtext" font-size="15px" >N</text>
  <text x="16.4" y="46.5" class="sumsign" transform="scale(0.8,1.25)" >Σ</text>
  <text x="8.2" y="74.5" class="sumtext" >i</text>
  <text x="17.4" y="74.5" class="sumtext" >=</text>
  <text x="26.7" y="75.6" class="sumtext" >1</text>
</svg>P<sub>i</sub>Q<sub>i</sub></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">
<span class="dyna-tab12">57</span><span class="dyna-tab5">V=SUM3(N,P,Q,R)</span>
<span class="dyna-tab5">V =</span>
<svg width="45" height="80" xmlns="http://www.w3.org/2000/svg" >
<style
  type="text/css"
  id="style1">
  .sumtext { fill: #523a28; font-size: 15px; stroke-width:1; font-family: monospace; }
  .sumsign { fill: #523a28; font-size: 44px; stroke-width:1.1; font-family: 'courier'; }
</style>
  <text x="18.41" y="15.9" class="sumtext" font-size="15px" >N</text>
  <text x="16.4" y="46.5" class="sumsign" transform="scale(0.8,1.25)" >Σ</text>
  <text x="8.2" y="74.5" class="sumtext" >i</text>
  <text x="17.4" y="74.5" class="sumtext" >=</text>
  <text x="26.7" y="75.6" class="sumtext" >1</text>
</svg>P<sub>i</sub>Q<sub>i</sub>R<sub>i</sub></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">In the three summation functions, P, Q, R may be either tables or boxcar trains. The names of the tables or boxcars are punched without an asterisk as the arguments of the function. Of course, N must be an integer.<sup> †</sup></p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-footnote"><sup>†</sup> An oversight in DYNAMO is the checking of the summing functions used in auxiliary equations for order of computation. The exact condition that is not checked is the summing by an auxiliary equation of a train, one or more of whose boxcars are defined by auxiliary equations. For example, in the following set of equations</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote2"><span class="dyna-tab12">37B</span><span class="dyna-tab5">TRAIN=BOXLIN(5,1)</span></p>
<p class="dyna-footnote2"><span class="dyna-tab12">C</span><span class="dyna-tab7">TRAIN*=0/1/1/1/1</span></p>
<p class="dyna-footnote2"><span class="dyna-tab12">53A</span><span class="dyna-tab5">SUM.K=SUM1(5,TRAIN.K)</span></p>
<p class="dyna-footnote2"><span class="dyna-tab12">20A</span><span class="dyna-tab5">TRAIN*1.K=X.K/Y.K</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-footnote">SUM will contain the .J value of TRAIN*1 rather than the .K value.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page44text = `<div class="dyna-topline">
<span class="left-align">special functions</span>
<span class="right-align">41</span>
</div>
<p class="dyna-p1">For example, the entries of the table T1A are to be multiplied by the corresponding entries of the train of boxcars named BBB, and the results are to be summed over the first five entries. The result is to be a rate BBT. The card would have the form</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">55R</span><span class="dyna-tab5">BBT.KL=SUM2(5,T1A,BBB.K)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Treatment of Round-off in Comparisons with TIME</span></p>
<p class="dyna-p1">In the equations whose action is indicated every time that TIME is a certain value (such as boxcar-shifting times, pulse times, sample times, and the like), unless DYNAMO takes certain precautions, round-off errors can cause variations in the time at which action is initiated. To avoid such variations, the time to initiate action is compared with the value of TIME at each computation step, and either if TIME is greater than the action time or if the two agree to within DT/2, action is initiated. (The same treatment of TIME governs the output times for printing and plotting.)</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1"><span class="dyna-underline">Variable Boxcar-Shifting, Pulse, Sample, Step, and Ramp Times</span></p>
<p class="dyna-p1">In the cases where the time to initiate an action, say a pulse time, is given as a variable, the following method is used. A record is kept of the last action time for each equation involving some sort of action. As an example, consider a sample equation in which the last sample time will be called Q. Initially the value of Q is set to 0. Then at each computation step the current value of Q is compared with TIME to see if the first sample time has occurred. When this first sample time has been reached, sampling is made, and the current value of Q, say Q1, is recorded as the last time a sample was taken. Then at each succeeding computation step, the sum of Q1 and the current value of Q are compared with TIME to see if the next sample time has been reached. When it has, the sampling is done, the current value of Q, say Q2, is added to Q1, and the result recorded as the last sample time. The process continues in this fashion so that sampling is done at time Q1, Q1 + Q2, Q1 + Q2 + Q3,...</p>
<p class="dyna-p1">This method for determining action times may seem somewhat contrived. To explain the motivation, let us consider for a moment not variable action times but action times that are nonintegral multiples of DT. These will illustrate exactly the same problems encountered in the use of variable action times. We shall show why the following method for determining action times (which may seem more natural) is not satisfactory. In this method, the first action is initiated as soon as TIME is equal to or greater than the action time Q, but the current value of TIME (not Q) is stored as the last action time. The next action is initiated as soon as TIME exceeds the sum of the previous action time and Q, and the new value of TIME is stored as the last action time, and so on.</p>
<p class="dyna-p1">Consider now the case where DT = 1 and Q = 1.5. Use of the method described directly above would give the action times shown in Table 2-3. In other words, after TIME has reached the value of 6, when we should have expected 6/1.5 = 4 action times, only 3 have occurred.</p>
<p class="dyna-p1"><p class="dyna-p1">If, on the other hand, we consider the method of determining the action times actually used by DYNAMO, we find 4 action times, as given in Table 2-4.</p>
<p class="dyna-p1">The fact that the correct <span class="dyna-underline">number</span> of action times occurs is particularly important in functions such as boxcar shifting, where the total number of shifts is especially critical.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page45text = `<div class="dyna-topline">
<span class="left-align">42</span>
<span class="right-align">reference manual</span>
</div>
<div class="dyna-caption">Table 2-3 Action Times Using Alternate Method</div>
<p class="dyna-centersvg">
<svg width="450" height="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1 L449 1 L449 199 L1 199 Z" stroke="#523a28" stroke-width="1.5" fill="none" />
  <path d="M1 199 L1 1 Z" stroke="#523a28" stroke-width="1" fill="none" />
  <line x1="1" y1="36" x2="449" y2="36" stroke="#523a28" stroke-width="1.5" />
  <line x1="111" y1="1" x2="111" y2="199" stroke="#523a28" stroke-width="1.5" />
  <style>
    .celltext { font-size: 16px;  font-family: 'courier'; font-weight: 500; letter-spacing: 2px; fill: #523a28; }
  </style>
  <text x="35" y="25" class="celltext">TIME</text>
  <text x="141" y="25" class="celltext">ACTION TIMES</text>
  <text x="51" y="55" class="celltext">0</text>
  <text x="198" y="55" class="celltext">No</text>
  <text x="51" y="76" class="celltext">1</text>
  <text x="198" y="76" class="celltext">No</text>
  <text x="51" y="97" class="celltext">2</text>
  <text x="194" y="97" class="celltext">Yes</text>
  <text x="248" y="97" class="celltext">(TIME ≥ 0 + Q)</text>
  <text x="51" y="118" class="celltext">3</text>
  <text x="198" y="118" class="celltext">No</text>
  <text x="51" y="139" class="celltext">4</text>
  <text x="194" y="139" class="celltext">Yes</text>
  <text x="248" y="139" class="celltext">(TIME ≥ 2 + Q)</text>
  <text x="51" y="165" class="celltext">5</text>
  <text x="208" y="165" class="celltext">No</text>
  <text x="51" y="186" class="celltext">6</text>
  <text x="194" y="186" class="celltext">Yes</text>
  <text x="248" y="186" class="celltext">(TIME ≥ 4 + Q)</text>
</svg>
</p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-caption">Table 2-4 Action Times Using DYNAMO Method</div>
<p class="dyna-centersvg">
<svg width="600" height="210" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1 L599 1 L599 209 L1 209 Z" stroke="#523a28" stroke-width="1.5" fill="none" />
  <path d="M1 209 L1 1 Z" stroke="#523a28" stroke-width="1" fill="none" />
  <line x1="1" y1="36" x2="599" y2="36" stroke="#523a28" stroke-width="1.5" />
  <line x1="118" y1="1" x2="118" y2="209" stroke="#523a28" stroke-width="1.5" />
  <style>
    .celltext { font-size: 16px;  font-family: 'courier'; font-weight: 500; letter-spacing: 2px; fill: #523a28; }
  </style>
  <text x="40" y="25" class="celltext">TIME</text>
  <text x="148" y="25" class="celltext">ACTION TIMES</text>
  <text x="55" y="55" class="celltext">0</text>
  <text x="207" y="55" class="celltext">No</text>
  <text x="55" y="76" class="celltext">1</text>
  <text x="207" y="76" class="celltext">No</text>
  <text x="55" y="97" class="celltext">2</text>
  <text x="203" y="97" class="celltext">Yes</text>
  <text x="253" y="97" class="celltext">(TIME ≥ Q = 1.5)</text>
  <text x="55" y="118" class="celltext">3</text>
  <text x="203" y="118" class="celltext">Yes</text>
  <text x="253" y="118" class="celltext">(TIME ≥ Q + Q = 3.0)</text>
  <text x="55" y="139" class="celltext">4</text>
  <text x="207" y="139" class="celltext">No</text>
  <text x="55" y="165" class="celltext">5</text>
  <text x="203" y="165" class="celltext">Yes</text>
  <text x="253" y="165" class="celltext">(TIME ≥ Q + Q + Q = 4.5)</text>
  <text x="55" y="186" class="celltext">6</text>
  <text x="203" y="186" class="celltext">Yes</text>
  <text x="253" y="186" class="celltext">(TIME ≥ Q + Q + Q + Q = 6.0)</text>
</svg>
</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">In practice, an action time is best chosen as an integral multiple of DT and, preferably, considerably greater than DT.</p>
<p class="dyna-p1">In the above demonstration the action times were selected by comparing the next action time directly with TIME, without consideration of whether the next action time fell within DT/2 of the present time. In practice, the next action time is always compared with TIME + DT/2.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-underline">2.7 The Choice of DT</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The choice of the size of DT<sup> †</sup> requires a compromise between a large DT that demands less computer time and a small DT that assures numerical accuracy. The accuracy of the model results associated with any particular value of DT is almost impossible to determine except by running the model and comparing these results with those obtained with a much smaller DT. Minor variations in the model should not significantly affect this accuracy.</p>
<p class="dyna-p1">There is an upper limit on the size of DT that is a consequence of the first-order delays included in the model. DT must be smaller than twice the smallest first-order delay, and experience indicates that half the smallest first-order delay is a good first choice for DT. Since a third-order delay is three cascaded first-order delays with delays one-third of the over-all delay, DT should be chosen</p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-footnote"><sup> †</sup> See also Appendix D of <span class="dyna-underline">Industrial Dynamics.</span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page46text = `<div class="dyna-topline">
<span class="left-align">estimating the computer time required</span>
<span class="right-align">43</span>
</div>
<svg class="svgplacement06" width="190" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .monospace {
      font-family: monospace;
      font-size: 16px;
      fill: #523a28;
    }
    .line {
      stroke: #523a28;
      stroke-width: 0.95;
    }
  </style>
  <text x="1.93" y="25.8" class="monospace">DT</text>
  <text x="26.3" y="24.3" class="monospace">≤</text>
  <text x="37.9" y="25.0" class="monospace">(</text>
  <text x="49.8" y="15.8" class="monospace">1</text>
  <text x="49.8" y="35.9" class="monospace">2</text>
  <text x="62.5" y="25.0" class="monospace">)</text>
  <text x="68.9" y="25.0" class="monospace">(</text>
  <text x="80.8" y="15.8" class="monospace">C</text>
  <text x="80.8" y="35.8" class="monospace">3</text>
  <text x="93.5" y="25.0" class="monospace">)</text>
  <text x="116" y="24.4" class="monospace">or</text>
  <text x="153" y="24.3" class="monospace">≤</text>
  <text x="173" y="15.8" class="monospace">C</text>
  <line x1="63.4" y1="20.0" x2="45.6" y2="20.0" class="line"/>
  <line x1="94.4" y1="20.0" x2="76.6" y2="20.0" class="line"/>
  <line x1="187" y1="20.0" x2="169.1" y2="20.0" class="line"/>
  <text x="173" y="35.8" class="monospace">6</text>
</svg>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">where C is the magnitude of the shortest third-order delay. It is important to repeat, however, that under certain circumstances acceptable numerical accuracy cannot be attained without resorting to smaller values of DT.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-underline">2.8 Estimating the Computer Time Required</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The following formula gives a rough estimate of the computer time required to make the basic run of a model on an IBM 709. If no SPEC card is included, consider the LENGTH to be 0; that is, use only the first term. If either PRTPER or PLTPER is 0, ignore the term involving it.</p>
<svg class="svgplacement07" width="660" height="220" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text-segment { font-family: monospace; font-size: 16px; fill: #523a28; }
    .line { stroke: #523a28; stroke-width: 1.5; }
  </style>
  <text x="10" y="35" class="text-segment">Time for basic run =</text>
  <text x="211" y="20" class="text-segment">number of cards</text>
  <line x1="211" y1="30" x2="352" y2="30" class="line"/>
  <text x="269" y="50" class="text-segment">600</text>
  <text x="380" y="35" class="text-segment">+</text>
  <text x="413" y="20" class="text-segment">(number of cards)(LENGTH)</text>
  <line x1="416" y1="30" x2="650" y2="30" class="line"/>
  <text x="471" y="50" class="text-segment">(200,000)(DT)</text>
  <text x="192" y="100" class="text-segment">+  (number of quantities being printed)(LENGTH)</text>
  <line x1="215" y1="110" x2="631" y2="110" class="line" id="line1"/>
  <text x="344" y="130" class="text-segment">(6000)(PRTPER)</text>
  <text x="192" y="180" class="text-segment">+ (number of graphs)(LENGTH)</text>
  <line x1="215" y1="190" x2="459" y2="190" class="line"/>
  <text x="280" y="210" class="text-segment">(300)(PLTPER)</text>
  <text x="480" y="195" class="text-segment">minutes</text>
</svg>
<p class="dyna-p1">The time required for each rerun is given by the following formula:</p>
<svg class="svgplacement07" width="660" height="220" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text-segment { font-family: monospace; font-size: 16px; fill: #523a28; }
   .line { stroke: #523a28; stroke-width: 1.5; }
  </style>
  <text x="10" y="35" class="text-segment">Time for a rerun =</text>
  <text x="195" y="20" class="text-segment">(number of cards)(LENGTH)</text>
  <line x1="195" y1="30" x2="433" y2="30" class="line"/>
  <text x="245" y="50" class="text-segment">(200,000)(DT)</text>
  <text x="175" y="100" class="text-segment">+  (number of quantities being printed)(LENGTH)</text>
  <line x1="197" y1="110" x2="615" y2="110" class="line" id="line1"/>
  <text x="327" y="130" class="text-segment">(6000)(PRTPER)</text>
  <text x="175" y="180" class="text-segment">+ (number of graphs)(LENGTH)</text>
  <line x1="198" y1="190" x2="442" y2="190" class="line"/>
  <text x="263" y="210" class="text-segment">(300)(PLTPER)</text>
  <text x="464" y="195" class="text-segment">minutes</text>
</svg>
<p class="dyna-p3">As in the basic run, if either PRTPER or PLTPER is 0, ignore the term involving it. Of course, the total time required is the sum of the time required for the first run plus the times required for each of the reruns.</p>
<p class="dyna-p1">The time required on an IBM 7090 will be about 1/5 of the value computed here.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page47text = `<center class="dyna-hdr2">Chapter 3</center>
<center class="dyna-hdr3">HOW DYNAMO WORKS</center>
<p class="dyna-p1">This chapter gives a very brief description of the internal structure of DYNAMO. It has been written in nontechnical language for the person unfamiliar with computer programming.</p>
<p class="dyna-p1">DYNAMO is divided into six parts or phases:</p></p>
<ul class="dyna-list"><li>The <span  class="dyna-underline">Input Phase</span> reads the cards describing the model, performs most but not all the checks on the model specifications, and generates tables in preparation for later phases.</li>
<li>The <span  class="dyna-underline">Generation Phase</span> transforms the model specifications (now in tables) into computer instructions.</li>
<li>The <span  class="dyna-underline">Running Phase</span> computes the values of the model variables, thereby generating data for printing and plotting.</li>
<li>The <span  class="dyna-underline">Printing Phase</span> tabulates the data in the form requested on PRINT cards.</li>
<li>The <span  class="dyna-underline">Plotting Phase</span> plots the data in accordance with the PLOT card requests.</li>
<li>The <span  class="dyna-underline">Rerun Phase</span> modifies constants in preparation for rerunning a model by the running phase.</li></ul>
<p class="dyna-p3"><span class="dyna-underline">3.1 Input Phase</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">As we shall see later, the other phases of DYNAMO depend on tables for their detailed instructions. It is the job of the input phase to read the cards and to create these tables.</p>
<p class="dyna-p1">The information on the equation cards is stored in three tables. The quantity name on the left side of the equality sign along with the quantity type is stored in the Quantity Name Table. Each quantity name is stored once and only once in this table. If a name appears on the left of the equality sign of two cards, DYNAMO checks to be sure that one equation is the initial condition for the other. If not, DYNAMO prints out that the quantity has been defined twice.</p>
<p class="dyna-p1">The equation form number tells DYNAMO how many quantity names or numerical values will be on the right of the equality sign. Further, it tells DYNAMO which algebraic symbols, such as +, ), and (, will separate them. Thus, when one uses Equation Form 7, V=P+Q, DYNAMO knows that two quantity names or numerical values will appear on the right of the equality sign, and that the first will lie between the equality sign and the plus sign, and the second will lie between the plus sign and the blank. It is for this reason that the "Exact Punching Format" listed in Appendix B must be followed exactly. It also is the reason why the final space must be provided.</p>
<p class="dyna-p1">The quantity names on the right of the equality sign, along with the equation form number are stored in Short Tables, one table for each equation. If the DYNAMO user employed a numerical value in place of a quantity name, the</p>
</div><center class="dyna-footer1">44</center>
<div class="dyna-blankline">&nbsp;</div>
`

const page48text = `<div class="dyna-topline">
<span class="left-align">generation phase</span>
<span class="right-align">45</span>
</div>
<p class="dyna-p1">numerical value would be stored in a Numerical Value Table, and its location in this table would be stored in the Short Table.</p>
<p class="dyna-p1">In the case of constant cards, no Short Table is necessary. The numerical value is stored in the Numerical Value Table. Its location in the Numerical Value Table along with the name is stored in the Quantity Name Table.</p>
<p class="dyna-p1">The quantity names on PRINT cards are stored in a "PRINT Table' according to the column and row where they are to appear. (The first name to appear in any column is assigned the first row, the second name, the second row, and so forth.)</p>
<p class="dyna-p1">The quantity names on PLOT cards are stored in a PLOT Table, grouped according to which are to have the same scales. These groups are followed by the upper and lower scale, if the user has provided them, or by "flags" that indicate that DYNAMO is to choose the scales.</p>
<p class="dyna-p1">Each quantity name that appears on a PRINT or PLOT card is also stored once and only once in a STORE Table. This forms the list of quantities whose values must be stored for later printing and/or plotting.</p>
<p class="dyna-p1">After DYNAMO has read in all the cards (except the cards for any reruns), DYNAMO assigns to each quantity name in the Quantity Name Table a location where that quantity's current value will be stored. Levels and rates will actually be assigned two locations. Rates will have one location for the new value .KL and another for the previous value .JK. Levels will have one location for the current value .K and another for the difference between the .J and .K values.</p>
<p class="dyna-p1">The last task of the input phase is going through the Short Tables, which now contain quantity names and locations of numerical values, and replacing the quantity names with their location in storage. Any quantity name that cannot be found in the Quantity Name Table is an undefined quantity; that is, it never appeared on the left of an equation, and consequently, no value is available for it.</p><p class="dyna-p1">In the case of constant cards, no Short Table is necessary. The numerical value is stored in the Numerical Value Table. Its location in the Numerical Value Table along with the name is stored in the Quantity Name Table.</p>
<p class="dyna-p1">The quantity names on PRINT cards are stored in a "PRINT Table' according to the column and row where they are to appear. (The first name to appear in any column is assigned the first row, the second name, the second row, and so forth.)</p>
<p class="dyna-p1">The quantity names on PLOT cards are stored in a PLOT Table, grouped according to which are to have the same scales. These groups are followed by the upper and lower scale, if the user has provided them, or by "flags" that indicate that DYNAMO is to choose the scales.</p>
<p class="dyna-p1">Each quantity name that appears on a PRINT or PLOT card is also stored once and only once in a STORE Table. This forms the list of quantities whose values must be stored for later printing and/or plotting.</p>
<p class="dyna-p1">After DYNAMO has read in all the cards (except the cards for any reruns), DYNAMO assigns to each quantity name in the Quantity Name Table a location where that quantity's current value will be stored. Levels and rates will actually be assigned two locations. Rates will have one location for the new value .KL and another for the previous value .JK. Levels will have one location for the current value .K and another for the difference between the .J and .K values.</p>
<p class="dyna-p1">The last task of the input phase is going through the Short Tables, which now contain quantity names and locations of numerical values, and replacing the quantity names with their location in storage. Any quantity name that cannot be found in the Quantity Name Table is an undefined quantity; that is, it never appeared on the left of an equation, and consequently, no value is available for it.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-underline">3.2&nbsp;&nbsp;Generation Phase</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">At this point it is necessary to digress a moment and to discuss briefly how a computer works. Perhaps the two most important parts of a computer are the arithmetic unit and the memory. In accordance with a sequence of instructions, the arithmetic unit takes numbers from the memory, performs arithmetic operations with them, and returns the results to the memory. A key portion of the arithmetic unit is the accumulator. The accumulator is the device in which the additions, subtractions, multiplications, and divisions take place. Before any of these operations, the addend, subtrahend, multiplicand, or dividend must be "loaded" into the accumulator from the memory unless it has been left there from a previous operation. Afterward, the result of each of these operations is left in the accumulator. If for any reason the result is to be saved, contents of the accumulator must be "stored" in some location in memory. Thus, the instructions take the form of loading the accumulator with the contents of some location in memory, adding to, subtracting from, multiplying or dividing the accumulator by the contents of some location in memory, or storing the contents of the accumulator in some location in memory. There are also other types of instructions, but they will not be necessary for this discussion.</p>
<p class="dyna-p1">Returning to the internal workings of DYNAMO, we find that the generation</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page49text = `<div class="dyna-topline">
<span class="left-align">46</span>
<span class="right-align">how DYNAMO works</span>
</div>
<p class="dyna-p1">phase includes "skeleton instructions" for each equation form. These instructions are skeleton in the sense that the part of the instruction that normally specifies the location of a number in memory specifies only the position in the Short Table, where the location of the quantity is stored.</p>
<ul class="dyna-list"><li>Load the value of the first entry in the Short Table into the accumulator.</li>
<li>Add the value of the second entry in the Short Table to the number in accumulator.</li>
<li>Store the results in the location for the quantity being defined.</li></ul>
<p class="dyna-p1">When the generating phase encounters an Equation Form 7, it adds these three instructions to the sequence of instructions that will constitute the model. As it adds each instruction, it replaces "the value of the first entry in the Short Table" with the location it finds as the first entry in the Short Table, and so on.</p>
<p class="dyna-p1">Before DYNAMO inserts the location for a quantity in an instruction, it checks to determine whether that quantity has been previously calculated. If it is a rate and the code being generated is for an auxiliary (or rate or supplementary) equation, then DYNAMO checks whether the model included an N-equation for the rate. If not, DYNAMO tags the equation for the rate to be repeated among the N equations. An example of DYNAMO-created initial-value equations will be described later.</p>
<p class="dyna-p1">Another type of quantity that may not have been previously calculated is an auxiliary being used in an auxiliary equation. When DYNAMO finds such a case, it reorders the equations so that no auxiliary is used in an auxiliary equation before it has been calculated. For example, suppose that DYNAMO wishes to generate the sequence of instructions for the auxiliary A.K but finds that A.K depends on another auxiliary, B.K. Furthermore, suppose that DYNAMO checks and finds that B.K has not had its sequence of instructions generated yet. DYNAMO puts A.K in a special list and then attempts to generate the sequence of in- structions for B.K. Now let us imagine that B.K depends on the auxiliary C.K, whose sequence of instructions also has not been generated. If this is the case,
DYNAMO adds B.K to the list after A.K and tries to generate the code for C.K. Let us consider two cases. In the first case, either C.K does not depend on any auxiliaries, or the auxiliaries on which it depends have already been calculated. Consequently, the sequence of instruction for C.K can be generated. DYNAMO proceeds to do just that and, furthermore, starts up the list and generates the sequence of instructions for B.K and then for A.K.</p>
<p class="dyna-p1">In the second case, C.K depends on A.K. Since A.K is calculated from B.K and B.K from C.K, DYNAMO is unable to generate the instruction for any of these quantities. It prints "SIMULTANEOUS EQNS AMONG AUX" and lists the quantity names A, B, and C that are involved in the simultaneity.</p><p class="dyna-p1">In this same way DYNAMO also reorders initial conditions and supplementaries.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page50text = `<div class="dyna-topline">
<span class="left-align">generation phase</span>
<span class="right-align">47</span>
</div>
<p class="dyna-p1">DYNAMO generates the code for the N equations last, in order to tag the variables that require initial values before any of the N equations have been generated. But during the process of generating them, more variables may be found to require initial values.</p>
<p class="dyna-p1">The simple model developed in the primer will serve as an example of this whole process. DYNAMO, as it is creating the rate equation for PSR, tags RRR as being a rate that requires an initial value but for which none was provided. Similarly, as it is creating the delay equation for SRR, it tags PSR as a rate requiring an initial value but for which none was provided.</p>
<p class="dyna-p1">Then, during the generation of the initial-value equations, DYNAMO tries to use the rate equation for RRR:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">7R</span><span class="dyna-tab4">RRR.KL=RRI+RCR.K</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">as the initial-value equation for RRR. But since RCR does not have an initial- value, DYNAMO proceeds to use the auxiliary equation</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">45A</span><span class="dyna-tab3">RCR.K=STEP(STH,5)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">as the initial-value equation for RCR. Now DYNAMO can use the rate equation above as an N equation for RRR.</p>
<p class="dyna-p1">The procedure for PSR is quite similar. Before DYNAMO can use the rate equation for PSR,</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">40R</span><span class="dyna-tab3">PSR.KL=RRR.JK+(1/DIR)(IDR.K-IAR.K)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">as an initial-value equation, it must create an initial-value equation for IDR from the auxiliary equation</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">12A</span><span class="dyna-tab3">IDR.K=(AIR)(RSR.K)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">Note that RSR is a level with an initial value, and consequently, DYNAMO can generate the equation for IDR immediately. The N equation for IAR also requires that IDR have an initial value. Whichever of PSR or IDR DYNAMO first encounters causes DYNAMO to create the N equation for IRD. When the other is encountered, DYNAMO finds that IDR already has an N equation. In summary, DYNAMO has created the following four equations:</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">45N</span><span class="dyna-tab3">RCR=STEP(STH,5)</span></p>
<p class="dyna-p2"><span class="dyna-tab11">7N</span><span class="dyna-tab4">RRR=RRI+RCR</span></p>
<p class="dyna-p2"><span class="dyna-tab11">12N</span><span class="dyna-tab3">IDR=(AIR)(RSR)</span></p>
<p class="dyna-p2"><span class="dyna-tab11">40R</span><span class="dyna-tab3">PSR=RRR+(1/DIR)(IDR-IAR)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">If the user had written his own initial-value equations, he would probably have written</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab11">6N</span><span class="dyna-tab4">RRR=RRI</span></p>
<p class="dyna-p2"><span class="dyna-tab11">6N</span><span class="dyna-tab4">PSR=RRR</span></p>
<p class="dyna-p2"><span class="dyna-tab11">12N</span><span class="dyna-tab3">IDR=(AIR)(RRR)</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3">His equations would have been simpler, but both sets give the same value.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page51text = `<div class="dyna-topline">
<span class="left-align">48</span>
<span class="right-align">how DYNAMO works</span>
</div>
<p class="dyna-p3"><span class="dyna-underline">3.3&nbsp;&nbsp;Running Phase</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">After all the instructions for a model have been generated, it is ready to be run.  The first step is to initialize those quantities that require initial values. Thus, DYNAMO</p>
<ol class="dyna-list"><li>Sets TIME equal to 0</li>
<li>Temporarily sets all computed constants, levels, auxiliaries, rates, and supplementaries equal to 0</li>
<li>Loads all the boxcar trains with the initial values provided by the special C cards</li>
<li>Computes the computed constants, and the initial values of levels and of those auxiliaries and rates for which initial values were provided (that is, computes all N-type equations)</li></ol>
<p class="dyna-p1">Now the model is initialized and ready to generate data. As the initial values of the levels have just been computed, DYNAMO starts with the auxiliaries or step 4 below. A complete time step consists of the following operations:</p>
<ol class="dyna-list"><li>The differences between levels at time .J and time .K are computed.</li>
<li>The differences are added to the levels at time .J to form the levels at time .K.</li>
<li>DT is added to TIME.J to form TIME.K.</li>
<li>Auxiliaries are computed for time .K.</li>
<li>Rates for the interval .KL are computed and stored in the extra location for rates. Thus the rates for the interval .JK are undisturbed and available for the calculation of other rates.</li>
<li>TIME is tested to determine whether this is an output time. (TIME=0 is, of course, an output time.) If so, the following three substeps are executed. If not, only substep b is executed, and DYNAMO proceeds on to step 7.TIME is tested to determine whether this is an output time. (TIME=0 is, of course, an output time.) If so, the following three substeps are executed. If not, only substep b is executed, and DYNAMO proceeds on to step 7.
<ol type="a"><li>The supplementaries are computed using the .JK values of the rates.</li>
<li>The rates just computed for the .KL interval are shifted from their extra location to the normal location for rates.</li>
<li>The present values of those quantities that are to be printed or plotted are saved on magnetic tape for later processing.</li></ol></li></ol>
<p class="dyna-p1">In order that DYNAMO can choose a scaling factor for printing and the upper and lower scale for plotting, DYNAMO must have the maximum and minimum values of all the quantities being saved on magnetic tape. Therefore, as each quantity is located and saved, it is compared with the past maximum and minimum for that quantity. If either the past maximum or minimum is exceeded, that value is replaced with the current value of the quantity.</p>
<ol start="7" class="dyna-list">
<li>TIME is tested to determine whether the run is completed. If so, DYNAMO proceeds to the printing phase. If not, DYNAMO goes on to the next step.</li>
<li>Each boxcar train is tested and shifted if this TIME is appropriate. (All trains are shifted at TIME=0.)</li></ol>
<p class="dyna-p1">At this point, time .L becomes time .K, time .K becomes time .J, and DYNAMO starts the time-step procedure again with step 1 just mentioned.</p>
<div class="dyna-blankline">&nbsp;</div>
`
const page52text = `<div class="dyna-topline">
<span class="left-align">rerun phase</span>
<span class="right-align">49</span>
</div>
<p class="dyna-p3"><span class="dyna-underline">3.4&nbsp;&nbsp;Printing Phase</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">After DYNAMO has generated all the data for the model and computed the maximum and minimum for each quantity, it is ready to print and plot.</p>
<p class="dyna-p1">First, DYNAMO goes through the PRINT Table and finds those quantities that DYNAMO is to scale. Then from the maximum absolute value for the quantity, DYNAMO computes a scaling factor and a position for the decimal point so that the maximum number of significant digits will be 5.</p>
<p class="dyna-p1">Then DYNAMO reads the data that were stored on magnetic tape, locates the decimal point, shifts the data into the proper position for the printed page, and writes the relocated data out on magnetic tape for later printing.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-underline">3.4&nbsp;&nbsp;Plotting Phase</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">After printing the results, DYNAMO goes on to the plotting phase. If the user has not provided all the scales, DYNAMO first computes the largest of the maxima of the quantities that are to be plotted on the same scale and the smallest of the minima. Then it chooses appropriate scales based on these numbers.</p>
<p class="dyna-p1">Once all the scales are known, DYNAMO proceeds to plot the results. It locates a character across the plot width by computing the percentage of the distance from the lower scale to the upper scale at which the point should be located. It then rounds to the nearest per cent and locates the character in the corresponding position; that is, if a character should be located 42.6% of the way up a scale, DYNAMO would place it in the 43rd position across the plot width. After all the characters are located, the line of characters is written out on magnetic tape for later printing.</p>
<p class="dyna-p1">If more than one plot has been requested, DYNAMO simply repeats the above procedure until all the plots are completed.</p>
<p class="dyna-p1">After the plotting is done, DYNAMO goes on to the rerun phase if there are reruns or proceeds to the next model.</p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-underline">3.5&nbsp;&nbsp;Rerun Phase</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">The rerun phase is similar to the input phase in that it is concerned with reading cards. Most of the cards will be constant cards giving new values for the constants. DYNAMO searches the table of quantity names to find where the numerical value of the constant is stored. Then it replaces the old value with the new and stores the old value in the Original Value Table. (If the model is rerun again, the first thing the rerun phase does is restore all the constants with their values from the Original Value Table.) If either a PRINT or PLOT card is included in the rerun, the complete previous print or plot request is wiped out and replaced by the new request.</p>
<p class="dyna-p1">After DYNAMO has read the last card of this rerun, it returns to the running phase.</p>
<p class="dyna-p1">This chapter has presented a brief description of how DYNAMO generates the computer instructions for a model, runs the model, and tabulates and plots the results. The necessary steps were: (1) the formation of tables from the model equation and direction cards, (2) the generation of computer instruction from the tables, (3) the running of the computer instructions to generate the data, and finally (4) the conversion of the data to tabulated and plotted results.</p>
<div class="dyna-blankline">&nbsp;</div>
`

const page53text = `<center class="dyna-hdr4">Appendix A</center>
<center class="dyna-hdr5">SCALING LETTERS</center>
<p class="dyna-p1">There are several instances when DYNAMO uses a single letter following a number to indicate the scaling DYNAMO has applied to that number. One such instance occurs in the tabulated results when the user has specified the scaling, and the number with that scaling exceeds 5 significant figures. Under these circumstances DYNAMO replaces the fifth digit with such a scaling letter. These letters have the following significance:</p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p3"><span class="dyna-underline"><span class="dyna-tab5">Letter</span><span class="dyna-tab18">Multiply Printed</span></span><span class="dyna-tab9">or</span><span class="dyna-underline"><span class="dyna-tab9">Consider Value</span></span></p>
<p class="dyna-p3"><span class="dyna-underline"><span class="dyna-tab32">Results by</span><span class="dyna-tab24">Expressed in</span></span></p>
<p class="dyna-table">A<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-3</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">thousandths</span></p>
<p class="dyna-table">B<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>9</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">billions</span></p>
<p class="dyna-table">C<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>27</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">octillions</span></p>
<p class="dyna-table">D<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>33</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">decillions</span></p>
<p class="dyna-table">E<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-6</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">millionths</span></p>
<p class="dyna-table">F<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-9</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">billionths</span></p>
<p class="dyna-table">G<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-12</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">trillionths</span></p>
<p class="dyna-table">H<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-15</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">quadrillionths</span></p>
<p class="dyna-table">J<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-18</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">quintillionths</span></p>
<p class="dyna-table">K<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab4" style="flex: 0 0 20px">&lt;&nbsp;<span class="dyna-exponent">10<sup>-30</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">(off scale)</span></p>
<p class="dyna-table">L<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-21</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">sextillionths</span></p>
<p class="dyna-table">M<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>6</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">millions</span></p>
<p class="dyna-table">N<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>30</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">nonillions</span></p>
<p class="dyna-table">P<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>24</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">septillions</span></p>
<p class="dyna-table">Q<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>15</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">quadrillions</span></p>
<p class="dyna-table">R<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>12</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">trillions</span></p>
<p class="dyna-table">S<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>21</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">sextillions</span></p>
<p class="dyna-table">T<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>3</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">thousands</span></p>
<p class="dyna-table">U<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-24</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">septillionths</span></p>
<p class="dyna-table">V<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>18</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">quintillions</span></p>
<p class="dyna-table">W<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-27</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">octillionths</span></p>
<p class="dyna-table">X<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>1</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">units</span></p>
<p class="dyna-table">Y<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6" style="flex: 0 0 20px"><span class="dyna-exponent">10<sup>-30</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">nonillionths</span></p>
<p class="dyna-table">Ꮓ<span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab4" style="flex: 0 0 20px">&gt;&nbsp;<span class="dyna-exponent">10<sup>33</sup></span></span><span class="dyna-tab5">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">.</span><span class="dyna-tab6">(off scale)</span></p>
<center class="dyna-footer1">50</center>
<div class="dyna-blankline">&nbsp;</div>
`

const page54text = `<center class="dyna-hdr4">Appendix B</center>
<center class="dyna-hdr5">EQUATION FORMS</center>
<center class="dyna-caption"><span class="dyna-underline">Specifications</span></center>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p1">A quantity name consists of 5 or fewer alphabetic or numeric characters, the first of which is alphabetic.</p>
<p class="dyna-p1">A numerical value consists of 8 or fewer decimal digits with or without a decimal point. This number may be multiplied by some power of 10 by immediately following it with the letter E and the (positive or negative) power of 10.</p>
<p class="dyna-p1">In the equation forms</p>
<div class="dyna-shortblank">&nbsp;</div>
<svg class="svgplacement08" width="550" height="190" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <style> .text { font-family: monospace; font-size: 16px; fill: #523a28; }</style>
  <text x="10" y="20" class="text">V</text>
  <text x="10" y="40" class="text">N</text>
  <text x="10" y="60" class="text">N1</text>
  <text x="10" y="80" class="text">N2</text>
  <text x="10" y="100" class="text">P-U</text>
  <text x="10" y="120" class="text">W-Z</text>
  <text x="10" y="140" class="text">C</text>
  <text x="10" y="160" class="text">C1</text>
  <text x="10" y="180" class="text">C2</text>
  <text x="26" y="20" class="text" transform="scale(1.25,3.6)">}</text>
  <text x="35" y="45" class="text" transform="scale(1.25,2.6)">}</text>
  <text x="26" y="48" class="text" transform="scale(1.25,3.6)">}</text>
  <text x="78" y="20" class="text">= quantity name, on left of equality sign</text>
  <text x="78" y="60" class="text">= numerical values</text>
  <text x="78" y="110" class="text">= quantity name or numerical value</text>
  <text x="78" y="160" class="text">= given or computed constant or numerical value</text>
</svg>
<center class="dyna-caption">Table B-1 Subscript Table</center>
<div class="dyna-shortblank">&nbsp;</div>
<div class="svg-fullwidth">
<svg class="svg-content" width="740" height="260" xmlns="http://www.w3.org/2000/svg">
<style id="style1">
    .lines {
      stroke: #523a28;
      stroke-width: 1.0;
    }
    .centered-text {
      font-size: 16px;
      fill: #523a28;
      text-anchor: middle;
    }
    .indented-text {
      font-size: 16px;
      fill: #523a28;
      text-anchor: start;
    }
</style>
<line class="lines" x1="1.5" y1="1.5" x2="738.5" y2="1.5"/>
<line class="lines" x1="1.5" y1="53.7" x2="738.5" y2="53.7"/>
<line class="lines" x1="389.9" y1="90.9" x2="738.5" y2="90.9"/>
<line class="lines" x1="1.5" y1="258.5" x2="738.5" y2="258.5"/>
<line class="lines" x1="1.5" y1="1.5" x2="1.5" y2="258.5"/>
<line class="lines" x1="260.4" y1="1.5" x2="260.4" y2="258.5"/>
<line class="lines" x1="389.9" y1="1.5" x2="389.9" y2="258.5"/>
<line class="lines" x1="448.7" y1="53.7" x2="448.7" y2="258.5"/>
<line class="lines" x1="496.5" y1="53.7" x2="496.5" y2="258.5"/>
<line class="lines" x1="558.2" y1="53.7" x2="558.2" y2="258.5"/>
<line class="lines" x1="603.5" y1="53.7" x2="603.5" y2="258.5"/>
<line class="lines" x1="672.8" y1="53.7" x2="672.8" y2="258.5"/>
<line class="lines" x1="738.5" y1="1.5" x2="738.5" y2="258.5"/>
<text class="centered-text" x="131" y="26.85" dominant-baseline="middle">
  <tspan x="131" dy="-0.6em">Quantity Type</tspan>
  <tspan x="131" dy="1.2em">on Left of Equation</tspan>
</text>
<text class="centered-text" x="325.1" y="26.9" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">Subscript</tspan>
  <tspan x="325.1" dy="1.2em">on Left</tspan>
</text>
<text class="centered-text" x="564.2" y="26.9" dominant-baseline="middle">
  <tspan x="564.2" dy="-0.6em">Subscripts on Quantities</tspan>
  <tspan x="564.2" dy="1.2em">on Right if Quantity is</tspan>
</text>
<text class="centered-text" x="419.1" y="80" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.43em">L</tspan>
</text>
<text class="centered-text" x="472.6" y="80" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.43em">A</tspan>
</text>
<text class="centered-text" x="527.3" y="80" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.43em">R</tspan>
</text>
<text class="centered-text" x="580.9" y="80" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.43em">S</tspan>
</text>
<text class="centered-text" x="638.1" y="80" dominant-baseline="middle">
  <tspan x="638.1" dy="-0.43em">C</tspan>
</text>
<text class="centered-text" x="705.7" y="80" dominant-baseline="middle">
  <tspan x="705.7" dy="-0.43em">N</tspan>
</text>
<text class="indented-text" x="31.5" y="120" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">L</tspan>
  <tspan x="4em" dy="0">Level</tspan>
</text>
<text class="centered-text" x="325.1" y="120" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="419.1" y="120" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">J</tspan>
</text>
<text class="centered-text" x="472.6" y="120" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">J</tspan>
</text>
<text class="centered-text" x="527.3" y="120" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">JK</tspan>
</text>
<text class="centered-text" x="580.9" y="120" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="120" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="120" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="31.5" y="142" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">A</tspan>
  <tspan x="4em" dy="0">Auxiliary</tspan>
</text>
<text class="centered-text" x="325.1" y="142" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="419.1" y="142" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="472.6" y="142" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="527.3" y="142" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">JK</tspan>
</text>
<text class="centered-text" x="580.9" y="142" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="142" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="142" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="31.5" y="164" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">R</tspan>
  <tspan x="4em" dy="0">Rate</tspan>
</text>
<text class="centered-text" x="325.1" y="164" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">KL</tspan>
</text>
<text class="centered-text" x="419.1" y="164" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="472.6" y="164" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="527.3" y="164" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">JK</tspan>
</text>
<text class="centered-text" x="580.9" y="164" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="164" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="164" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="31.5" y="186" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">S</tspan>
  <tspan x="4em" dy="0">Supplementary</tspan>
</text>
<text class="centered-text" x="325.1" y="186" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="419.1" y="186" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="472.6" y="186" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">K</tspan>
</text>
<text class="centered-text" x="527.3" y="186" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">JK</tspan>
</text>
<text class="centered-text" x="580.9" y="186" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">K</tspan>
</text>
<text class="indented-text" x="603.5" y="186" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="186" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="31.5" y="208" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">C</tspan>
  <tspan x="4em" dy="0">Constant</tspan>
</text>
<text class="indented-text" x="40" y="252" dominant-baseline="middle">
  <tspan x="4.4em" dy="-0.6em">computed constant</tspan>
</text>
<text class="centered-text" x="325.1" y="208" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">none</tspan>
</text>
<text class="centered-text" x="419.1" y="208" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="472.6" y="208" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="527.3" y="208" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="580.9" y="208" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="208" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="672.8" y="208" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="40" y="230" dominant-baseline="middle">
  <tspan x="4.4em" dy="-0.6em">iNitial value or</tspan>
</text>
<text class="indented-text" x="31.5" y="241" dominant-baseline="middle">
  <tspan x="1em" dy="-0.6em">N</tspan>
</text>
<text x="44" y="93.2" class="indented-text" transform="scale(1.25,2.6)">{</text>
<text class="centered-text" x="325.1" y="241" dominant-baseline="middle">
  <tspan x="325.1" dy="-0.6em">none</tspan>
</text>
<text class="centered-text" x="419.1" y="241" dominant-baseline="middle">
  <tspan x="419.1" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="472.6" y="241" dominant-baseline="middle">
  <tspan x="472.6" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="527.3" y="241" dominant-baseline="middle">
  <tspan x="527.3" dy="-0.6em">&#8212;</tspan>
</text>
<text class="centered-text" x="580.9" y="241" dominant-baseline="middle">
  <tspan x="580.9" dy="-0.6em">&#8212;</tspan>
</text>
<text class="indented-text" x="603.5" y="241" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
<text class="indented-text" x="672.8" y="241" dominant-baseline="middle">
  <tspan dx="1em" dy="-0.6em">none</tspan>
</text>
</svg>
</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p5">A ± in an equation form indicates that either sign is acceptable. After any of = ( / or , the + sign can be dropped.</p>
<div class="dyna-blankline">&nbsp;</div>
<center class="dyna-caption"><span class="dyna-underline">Letters Following Equation Form Number</span></center>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p5">A or R<span class="dyna-tab8">may be used to define only auxiliaries or rates</span></p>
<p class="dyna-p5">В<span class="dyna-tab13">may be used to define only boxcar trains. Also, no other</span></p>
<p class="dyna-p5"><span class="dyna-tab15">equation types may be used to define boxcar trains.</span></p>
<p class="dyna-p5">L<span class="dyna-tab13">may be used to define only levels. Furthermore, levels</span></p>
<p class="dyna-p5"><span class="dyna-tab15">may be defined only by so-marked equation forms.</p>
<p class="dyna-p5">N<span class="dyna-tab13">may be used to define only initial values.</span></p>
<p class="dyna-p5">R<span class="dyna-tab13">may be used to define only rates.</span></p>
<p class="dyna-p5">no letter<span class="dyna-tab5">may be used to define auxiliaries, rates, computed</p>
<p class="dyna-p5"><span class="dyna-tab15">constants, initial values, or supplementaries; that is,</span></p>
<p class="dyna-p5"><span class="dyna-tab15">any quantity type except level or boxcar train.</span></p>
<center class="dyna-footer1">51</center>
<div class="dyna-blankline">&nbsp;</div>
`

const page55text = `<div class="dyna-topline">
<span class="left-align">52</span>
<span class="center-align">Table B-1 Equation Forms</span>
<span class="right-align">appendix B</span>
</div>
<div class="dyna-eqnline">
<span class="center-align"><span class="dyna-underline">Level Equations</span></span>
<span class="right-align"><span class="dyna-underline">Form Number</span></span>
</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09" width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style> .text { font-family: monospace; fill: #523a28; font-size: 16px; } </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">V</text>
  <text x="47" y="25" class="text">+</text>
  <text x="60" y="25" class="text">(</text>
  <text x="69" y="25.6" class="text">D</text>
  <text x="80" y="25.6" class="text">T</text>
  <text x="89" y="25" class="text">)</text>
  <text x="95" y="25" class="text">(</text>
  <text x="104" y="25.6" class="text">P</text>
  <text x="118" y="25" class="text">+</text>
  <text x="132" y="25.6" class="text">Q</text>
  <text x="140" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">1L&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V.K=V.J+(DT)(±P±Q)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09" width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style> .text { font-family: monospace; fill: #523a28; font-size: 16px; } </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">V</text>
  <text x="47" y="25" class="text">+</text>
  <text x="60" y="25" class="text">(</text>
  <text x="69" y="25.6" class="text">D</text>
  <text x="80" y="25.6" class="text">T</text>
  <text x="89" y="25" class="text">)</text>
  <text x="95" y="25" class="text">(</text>
  <text x="104" y="25.6" class="text">P</text>
  <text x="118" y="25" class="text">+</text>
  <text x="132" y="25.6" class="text">Q</text>
  <text x="146" y="25" class="text">+</text>
  <text x="160" y="25.6" class="text">R</text>
  <text x="174" y="25" class="text">+</text>
  <text x="188" y="25.6" class="text">S</text>
  <text x="196" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">52L&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V.K=V.J+(DT)(±P±Q±R±S)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09" width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style> .text { font-family: monospace; fill: #523a28; font-size: 16px; } </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">V</text>
  <text x="47" y="25" class="text">+</text>
  <text x="60" y="25" class="text">(</text>
  <text x="69" y="25.6" class="text">D</text>
  <text x="80" y="25.6" class="text">T</text>
  <text x="89" y="25" class="text">)</text>
  <text x="95" y="25" class="text">(</text>
  <text x="104" y="25.6" class="text">P</text>
  <text x="118" y="25" class="text">+</text>
  <text x="132" y="25.6" class="text">Q</text>
  <text x="146" y="25" class="text">+</text>
  <text x="160" y="25.6" class="text">R</text>
  <text x="174" y="25" class="text">+</text>
  <text x="188" y="25.6" class="text">S</text>
  <text x="202" y="25" class="text">+</text>
  <text x="216" y="25.6" class="text">T</text>
  <text x="230" y="25" class="text">+</text>
  <text x="244" y="25.6" class="text">U</text>  
  <text x="252" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">2L&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V.K=V.J+(DT)(±P±Q±R±S±T±U)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">V</text>
  <text x="47" y="25" class="text">+</text>
  <text x="60" y="25" class="text">(</text>
  <text x="69" y="25.6" class="text">D</text>
  <text x="80" y="25.6" class="text">T</text>
  <text x="89" y="25" class="text">)</text>
  <text x="76" y="12.8" class="text" transform="scale(1.25,2.6)">(</text>
  <text x="109" y="16.6" class="text">P</text>
  <text x="123" y="16" class="text">+</text>
  <text x="137" y="16.6" class="text">Q</text>
  <line x1="107" y1="20.4" x2="147" y2="20.4" class="math-bar" />
  <text x="123" y="36.6" class="text">Y</text>
  <text x="117.5" y="12.8" class="text" transform="scale(1.25,2.6)">)</text>
</svg></span><span class="right-align"><span class="eqn-number">3L&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V.K=V.J+(DT)(1/±Y)(±P±Q)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">V</text>
  <text x="47" y="25" class="text">+</text>
  <text x="60" y="25" class="text">(</text>
  <text x="69" y="25.6" class="text">D</text>
  <text x="80" y="25.6" class="text">T</text>
  <text x="89" y="25" class="text">)</text>
  <text x="76" y="12.8" class="text" transform="scale(1.25,2.6)">(</text>
  <text x="109" y="16.6" class="text">P</text>
  <text x="123" y="16" class="text">+</text>
  <text x="137" y="16.6" class="text">Q</text>
  <text x="151" y="16" class="text">+</text>
  <text x="165" y="16.6" class="text">R</text>
  <text x="179" y="16" class="text">+</text>
  <text x="193" y="16.6" class="text">S</text>
  <text x="207" y="16" class="text">+</text>
  <text x="221" y="16.6" class="text">T</text>
  <text x="235" y="16" class="text">+</text>
  <text x="249" y="16.6" class="text">U</text> 
  <line x1="107" y1="20.4" x2="259" y2="20.4" class="math-bar" />
  <text x="179" y="36.6" class="text">Y</text>
  <text x="207.5" y="12.8" class="text" transform="scale(1.25,2.6)">)</text>
</svg></span><span class="right-align"><span class="eqn-number">4L&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V.K=V.J+(DT)(1/±Y)(±P±Q±R±S±T±U)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">V</text>
  <text x="47" y="25" class="text">+</text>
  <text x="60" y="25" class="text">(</text>
  <text x="69" y="25.6" class="text">D</text>
  <text x="80" y="25.6" class="text">T</text>
  <text x="89" y="25" class="text">)</text>
  <text x="76" y="12.8" class="text" transform="scale(1.25,2.6)">(</text>
  <text x="109" y="16.6" class="text">P</text>
  <text x="123" y="16" class="text">+</text>
  <text x="137" y="16.6" class="text">Q</text>
  <text x="155" y="25" class="text">+</text>
  <text x="173" y="16.6" class="text">R</text>
  <text x="187" y="16" class="text">+</text>
  <text x="201" y="16.6" class="text">S</text>
  <line x1="107" y1="20.4" x2="147" y2="20.4" class="math-bar" />
  <line x1="171" y1="20.4" x2="211" y2="20.4" class="math-bar" />
  <text x="123" y="36.6" class="text">Y</text>
  <text x="187" y="36.6" class="text">Z</text>
  <text x="168.5" y="12.8" class="text" transform="scale(1.25,2.6)">)</text>
</svg></span><span class="right-align"><span class="eqn-number">5L&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V.K=V.J+(DT)((1/±Y)(±P±Q)+(1/±Z)(±R±S))</span></span></p>
<div class="dyna-shortblank">&nbsp;</div>
<div class="dyna-eqnline">
<span class="center-align"><span class="dyna-underline">Sums, Products, and Products with Sums</span></span>
</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">P</text>
</svg></span><span class="right-align"><span class="eqn-number">6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page56text = `<div class="dyna-topline">
<span class="left-align">53</span>
<span class="right-align">equation forms</span>
</div>
<div class="dyna-eqnline">
<span class="center-align"><span class="dyna-underline">Sums, Products, and Products with Sums</span></span>
<span class="right-align"><span class="dyna-underline">Form Number</span></span>
</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">P</text>
  <text x="47" y="25" class="text">+</text>
  <text x="62" y="25.6" class="text">Q</text>
</svg></span><span class="right-align"><span class="eqn-number">7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P±Q</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">P</text>
  <text x="47" y="25" class="text">+</text>
  <text x="62" y="25.6" class="text">Q</text>
  <text x="77" y="25" class="text">+</text>
  <text x="92" y="25.6" class="text">R</text>
</svg></span><span class="right-align"><span class="eqn-number">8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P±Q±R</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">P</text>
  <text x="47" y="25" class="text">+</text>
  <text x="62" y="25.6" class="text">Q</text>
  <text x="77" y="25" class="text">+</text>
  <text x="92" y="25.6" class="text">R</text>
  <text x="107" y="25" class="text">+</text>
  <text x="122" y="25.6" class="text">S</text>206
</svg></span><span class="right-align"><span class="eqn-number">9&nbsp&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P±Q±R±S</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">P</text>
  <text x="47" y="25" class="text">+</text>
  <text x="62" y="25.6" class="text">Q</text>
  <text x="77" y="25" class="text">+</text>
  <text x="92" y="25.6" class="text">R</text>
  <text x="107" y="25" class="text">+</text>
  <text x="122" y="25.6" class="text">S</text>
  <text x="137" y="25" class="text">+</text>
  <text x="152" y="25.6" class="text">T</text>
  <text x="167" y="25" class="text">+</text>
  <text x="182" y="25.6" class="text">U</text>
</svg></span><span class="right-align"><span class="eqn-number">10&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P±Q±R±S±T±U</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">P</text>
  <text x="47" y="25" class="text">+</text>
  <text x="62" y="25.6" class="text">Q</text>
  <text x="77" y="25" class="text">+</text>
  <text x="92" y="25.6" class="text">R</text>
  <text x="107" y="25" class="text">+</text>
  <text x="122" y="25.6" class="text">S</text>
  <text x="137" y="25" class="text">+</text>
  <text x="152" y="25.6" class="text">T</text>
  <text x="167" y="25" class="text">+</text>
  <text x="182" y="25.6" class="text">U</text>
  <text x="197" y="25" class="text">+</text>
  <text x="212" y="25.6" class="text">W</text>
  <text x="227" y="25" class="text">+</text>
  <text x="242" y="25.6" class="text">X</text>
</svg></span><span class="right-align"><span class="eqn-number">11&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P±Q±R±S±T±U±W±X</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25" class="text">(</text>
  <text x="41" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">)</text>
  <text x="59" y="25" class="text">(</text>
  <text x="68" y="25.6" class="text">Q</text>
  <text x="77" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">12&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25" class="text">(</text>
  <text x="41" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">)</text>
  <text x="59" y="25" class="text">(</text>
  <text x="68" y="25.6" class="text">Q</text>
  <text x="77" y="25" class="text">)</text>
  <text x="86" y="25" class="text">(</text>
  <text x="95" y="25.6" class="text">R</text>
  <text x="104" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">13&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q)(±R)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">+</text>
  <text x="65" y="25" class="text">(</text>
  <text x="74" y="25.6" class="text">Q</text>
  <text x="83" y="25" class="text">)</text>
  <text x="92" y="25" class="text">(</text>
  <text x="101" y="25.6" class="text">R</text>
  <text x="110" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">14&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P+(±Q)(±R)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25" class="text">(</text>
  <text x="41" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">)</text>
  <text x="59" y="25" class="text">(</text>
  <text x="68" y="25.6" class="text">Q</text>
  <text x="77" y="25" class="text">)</text>
  <text x="91" y="25" class="text">+</text>
  <text x="104" y="25" class="text">(</text>
  <text x="113" y="25.6" class="text">R</text>
  <text x="122" y="25" class="text">)</text>
  <text x="131" y="25" class="text">(</text>
  <text x="140" y="25.6" class="text">S</text>
  <text x="149" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">15&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q)+(±R)(±S)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page57text = `<div class="dyna-topline">
<span class="left-align">54</span>
<span class="right-align">appendix B</span>
</div>
<div class="dyna-eqnline">
<span class="center-align"><span class="dyna-underline">Sums, Products, and Products with Sums</span></span>
<span class="right-align"><span class="dyna-underline">Form Number</span></span>
</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25" class="text">(</text>
  <text x="41" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">)</text>
  <text x="59" y="25" class="text">(</text>
  <text x="68" y="25.6" class="text">Q</text>
  <text x="77" y="25" class="text">)</text>
  <text x="91" y="25" class="text">+</text>
  <text x="104" y="25" class="text">(</text>
  <text x="113" y="25.6" class="text">R</text>
  <text x="122" y="25" class="text">)</text>
  <text x="128" y="25" class="text">(</text>
  <text x="137" y="25.6" class="text">S</text>
  <text x="146" y="25" class="text">)</text>
  <text x="161" y="25" class="text">+</text>
  <text x="176" y="25" class="text">(</text>
  <text x="185" y="25.6" class="text">T</text>
  <text x="194" y="25" class="text">)</text>
  <text x="203" y="25" class="text">(</text>
  <text x="212" y="25.6" class="text">U</text>
  <text x="221" y="25" class="text">)</text>
  <text x="235" y="25" class="text">+</text>
  <text x="248" y="25" class="text">(</text>
  <text x="257" y="25.6" class="text">W</text>
  <text x="266" y="25" class="text">)</text>
  <text x="272" y="25" class="text">(</text>
  <text x="281" y="25.6" class="text">X</text>
  <text x="290" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">16&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q)+(±R)(±S)+(±T)(±U)+(±W)(±X)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25" class="text">(</text>
  <text x="41" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">)</text>
  <text x="59" y="25" class="text">(</text>
  <text x="68" y="25.6" class="text">Q</text>
  <text x="77" y="25" class="text">)</text>
  <text x="86" y="25" class="text">(</text>
  <text x="95" y="25.6" class="text">R</text>
  <text x="104" y="25" class="text">)</text>
  <text x="119" y="25" class="text">+</text>
  <text x="134" y="25" class="text">(</text>
  <text x="143" y="25.6" class="text">S</text>
  <text x="152" y="25" class="text">)</text>
  <text x="161" y="25" class="text">(</text>
  <text x="170" y="25.6" class="text">T</text>
  <text x="179" y="25" class="text">)</text>
  <text x="188" y="25" class="text">(</text>
  <text x="197" y="25.6" class="text">U</text>
  <text x="206" y="25" class="text">)</text>
  <text x="221" y="25" class="text">+</text>
  <text x="236" y="25" class="text">(</text>
  <text x="245" y="25.6" class="text">W</text>
  <text x="254" y="25" class="text">)</text>
  <text x="263" y="25" class="text">(</text>
  <text x="272" y="25.6" class="text">X</text>
  <text x="281" y="25" class="text">)</text>
  <text x="290" y="25" class="text">(</text>
  <text x="299" y="25.6" class="text">Y</text>
  <text x="308" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">17&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q)(±R)+(±S)(±T)(±U)+(±W)(±X)(±Y)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25" class="text">(</text>
  <text x="41" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">)</text>
  <text x="59" y="25" class="text">(</text>
  <text x="68" y="25.6" class="text">Q</text>
  <text x="83" y="25" class="text">+</text>
  <text x="98" y="25.6" class="text">R</text>
  <text x="107" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">18&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q±R)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="25" class="text">(</text>
  <text x="41" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">)</text>
  <text x="59" y="25" class="text">(</text>
  <text x="68" y="25.6" class="text">Q</text>
  <text x="83" y="25" class="text">+</text>
  <text x="98" y="25.6" class="text">R</text>
  <text x="113" y="25" class="text">+</text>
  <text x="128" y="25.6" class="text">S</text>
  <text x="143" y="25" class="text">+</text>
  <text x="158" y="25.6" class="text">T</text>
  <text x="173" y="25" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">19&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q±R±S±T)</span></span></p>
<div class="dyna-eqnline">
<span class="center-align"><span class="dyna-underline">Ratios</span></span>
</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="16.6" class="text">P</text>
  <line x1="32" y1="20.4" x2="48" y2="20.4" class="math-bar" />
  <text x="35" y="36.6" class="text">Q</text>
</svg></span><span class="right-align"><span class="eqn-number">20&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P/±Q</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="16" class="text">(</text>
  <text x="41" y="16.6" class="text">P</text>
  <text x="50" y="16" class="text">)</text>
  <text x="59" y="16" class="text">(</text>
  <text x="68" y="16.6" class="text">Q</text>
  <text x="77" y="16" class="text">)</text>
  <line x1="32" y1="20.4" x2="87" y2="20.4" class="math-bar" />
  <text x="55" y="36.6" class="text">R</text>
</svg></span><span class="right-align"><span class="eqn-number">44&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q)/±R</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="55" y="16.6" class="text">P</text>
  <line x1="32" y1="20.4" x2="87" y2="20.4" class="math-bar" />
  <text x="32" y="36" class="text">(</text>
  <text x="68" y="36.6" class="text">Q</text>
  <text x="50" y="36" class="text">)</text>
  <text x="59" y="36" class="text">(</text>
  <text x="41" y="36.6" class="text">R</text>
  <text x="77" y="36" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">42&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P/((±Q)(±R))</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="16" class="text">(</text>
  <text x="41" y="16.6" class="text">P</text>
  <text x="50" y="16" class="text">)</text>
  <text x="59" y="16" class="text">(</text>
  <text x="68" y="16.6" class="text">Q</text>
  <text x="77" y="16" class="text">)</text>
  <text x="86" y="16" class="text">(</text>
  <text x="95" y="16.6" class="text">R</text>
  <text x="104" y="16" class="text">)</text>
  <line x1="32" y1="20.4" x2="107" y2="20.4" class="math-bar" />
  <text x="32" y="36" class="text">(</text>
  <text x="41" y="36.6" class="text">S</text>
  <text x="50" y="36" class="text">)</text>
  <text x="59" y="36" class="text">(</text>
  <text x="68" y="36.6" class="text">T</text>
  <text x="77" y="36" class="text">)</text>
  <text x="86" y="36" class="text">(</text>
  <text x="95" y="36.6" class="text">U</text>
  <text x="104" y="36" class="text">)</text>
</svg></span><span class="right-align"><span class="eqn-number">46&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q)(±R)/((±S)(±T)(±U))</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page58text = `<div class="dyna-topline">
<span class="left-align">55</span>
<span class="right-align">equation forms</span>
</div>
<div class="dyna-eqnline">
<span class="center-align"><span class="dyna-underline">Ratios</span></span>
<span class="right-align"><span class="dyna-underline">Form Number</span></span>
</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="16.6" class="text">P</text>
  <text x="50" y="16" class="text">+</text>
  <text x="65" y="16.6" class="text">Q</text>
  <line x1="35" y1="20.4" x2="75" y2="20.4" class="math-bar" />
  <text x="50" y="36.6" class="text">Y</text>
</svg></span><span class="right-align"><span class="eqn-number">21&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(1/±Y)(±P±Q)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="16.6" class="text">P</text>
  <text x="50" y="16" class="text">+</text>
  <text x="65" y="16.6" class="text">Q</text>
  <text x="80" y="16" class="text">+</text>
  <text x="95" y="16.6" class="text">R</text>
  <text x="110" y="16" class="text">+</text>
  <text x="125" y="16.6" class="text">S</text>
  <text x="140" y="16" class="text">+</text>
  <text x="155" y="16.6" class="text">T</text>
  <text x="170" y="16" class="text">+</text>
  <text x="185" y="16.6" class="text">U</text>
  <line x1="35" y1="20.4" x2="195" y2="20.4" class="math-bar" />
  <text x="110" y="36.6" class="text">Y</text>
</svg></span><span class="right-align"><span class="eqn-number">24&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(1/±Y)(±P±Q±R±S±T±U)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="tSpecial Functionsext">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="16" class="text">(</text>
  <text x="41" y="16.6" class="text">P</text>
  <text x="50" y="16" class="text">)</text>
  <text x="59" y="16" class="text">(</text>
  <text x="68" y="16.6" class="text">Q</text>
  <text x="77" y="16" class="text">)</text>
  <text x="91" y="16" class="text">+</text>
  <text x="104" y="16" class="text">(</text>
  <text x="113" y="16.6" class="text">R</text>
  <text x="122" y="16" class="text">)</text>
  <text x="131" y="16" class="text">(</text>
  <text x="140" y="16.6" class="text">S</text>
  <text x="149" y="16" class="text">)</text>
  <line x1="35" y1="20.4" x2="154" y2="20.4" class="math-bar" />
  <text x="91" y="36.6" class="text">Y</text>
</svg></span><span class="right-align"><span class="eqn-number">22&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(1/±Y)((±P)(±Q)+(±R)(±S))</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="16.6" class="text">P</text>
  <text x="50" y="16" class="text">+</text>
  <text x="65" y="16.6" class="text">Q</text>
  <line x1="35" y1="20.4" x2="76" y2="20.4" class="math-bar" />
  <text x="50" y="36.6" class="Special Functionstext">Y</text>
  <text x="84" y="25" class="text">+</text>
  <text x="101" y="16.6" class="text">R</text>
  <text x="116" y="16" class="text">+</text>
  <text x="131" y="16.6" class="text">S</text>
  <line x1="101" y1="20.4" x2="140" y2="20.4" class="math-bar" />
  <text x="116" y="36.6" class="text">Z</text>
</svg></span><span class="right-align"><span class="eqn-number">23&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(1/±Y)(±P±Q)+(1/±Z)(±R±S)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="16.6" class="text">P</text>
  <line x1="32" y1="20.4" x2="48" y2="20.4" class="math-bar" />
  <text x="35" y="36.6" class="text">Q</text>
  <text x="54" y="25" class="text">+</text>
  <text x="73" y="25.6" class="text">R</text>
</svg></span></span>
</svg></span><span class="right-align"><span class="eqn-number">27&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P/±Q)±R</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">+</text>
  <text x="69" y="16.6" class="text">R</text>
  <text x="84" y="16" class="text">+</text>
  <text x="99" y="16.6" class="text">S</text>
  <line x1="69" y1="20.4" x2="108" y2="20.4" class="math-bar" />
  <text x="84" y="36.6" class="text">Q</text>
</svg></span></span>
</svg></span><span class="right-align"><span class="eqn-number">40&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P+(1/±Q)(±R±S)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="25.6" class="text">P</text>
  <text x="50" y="25" class="text">+</text>
  <text x="69" y="16.6" class="text">R</text>
  <text x="84" y="16" class="text">+</text>
  <text x="99" y="16.6" class="text">S</text>
  <text x="114" y="16" class="text">+</text>
  <text x="129" y="16.6" class="text">T</text>
  <text x="144" y="16" class="text">+</text>
  <text x="159" y="16.6" class="text">U</text>
  <text x="174" y="16" class="text">+</text>
  <text x="189" y="16.6" class="text">W</text>
  <text x="204" y="16" class="text">+</text>
  <text x="219" y="16.6" class="text">X</text>
  <line x1="69" y1="20.4" x2="228" y2="20.4" class="math-bar" />
  <text x="144" y="36.6" class="text">Q</text>
</svg></span></span>
</svg></span><span class="right-align"><span class="eqn-number">25&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P+(1/±Q)(±R±S±T±U±W±X)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="50" y="16.6" class="text">P</text>
  <line x1="35" y1="20.4" x2="75" y2="20.4" class="math-bar" />
  <text x="35" y="36.6" class="text">Q</text>
  <text x="50" y="36" class="text">+</text>
  <text x="65" y="36.6" class="text">R</text>
</svg></span></span>
</svg></span><span class="right-align"><span class="eqn-number">48&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=±P/(±Q±R)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="32" y="16" class="text">(</text>
  <text x="41" y="16.6" class="text">P</text>
  <text x="50" y="16" class="text">)</text>
  <text x="59" y="16" class="text">(</text>
  <text x="68" y="16.6" class="text">Q</text>
  <text x="77" y="16" class="text">)</text>
  <line x1="32" y1="20.4" x2="85" y2="20.4" class="math-bar" />
  <text x="40" y="36.6" class="text">R</text>
  <text x="55" y="36" class="text">+</text>
  <text x="70" y="36.6" class="text">S</text>
</svg></span><span class="right-align"><span class="eqn-number">50&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)(±Q)/(±R±S)</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<span class="dyna-tab12">
<svg class="svgplacement09">width="400" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="16.6" class="text">P</text>
  <text x="50" y="16" class="text">+</text>
  <text x="65" y="16.6" class="text">Q</text>
  <text x="80" y="16" class="text">+</text>
  <text x="95" y="16.6" class="text">R</text>
  <line x1="35" y1="20.4" x2="106" y2="20.4" class="math-bar" />
  <text x="35" y="36.6" class="text">S</text>
  <text x="50" y="36" class="text">+</text>
  <text x="65" y="36.6" class="text">T</text>
  <text x="80" y="36" class="text">+</text>
  <text x="95" y="36.6" class="text">U</text>
</svg></span><span class="right-align"><span class="eqn-number">26&nbsp;&nbsp;&nbsp;&nbsp;</span></span></p>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P±Q±R)/(±S±T±U)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page59text = `<div class="dyna-topline">
<span class="left-align">56</span>
<span class="right-align">appendix B</span>
</div>
<div class="dyna-eqnline">
<span class="center-align"><span class="dyna-underline">Special Functions</span></span>
<span class="right-align"><span class="dyna-underline">Form Number</span></span>
</div>
<div class="dyna-shortbreak">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">General Form</span><span class="right-align">28&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">
<svg class="svgplacement10" width="110" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="25.6" class="text">P</text>
  <text x="55" y="25.6" class="text">e</text>
  <text x="70" y="16.6" class="text">Q</text>
</svg><span class="dyna-tab30">(exponential)</span></p>
<p class="dyna-p2"><span class=" dyna-tab42">(Q must be < 88)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)EXP(±Q)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">General Form</span><span class="right-align">29&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">
<svg class="svgplacement10" width="110" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="25.6" class="text">P</text>
  <text x="55" y="25.6" class="text">ln</text>
  <text x="85" y="25.6" class="text">Q</text>
</svg><span class="dyna-tab30">(natural logarithm)</span></p>
<p class="dyna-p2"><span class=" dyna-tab42">(Q must be > 0)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)LOGN(±Q)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">General Form</span><span class="right-align">30&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">
<svg class="svgplacement10" width="110" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .line { stroke: #523a28; stroke-width: 1.35; stroke-linecap: round; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="25.6" class="text">P</text>
  <text x="65" y="25.6" class="text">Q</text>
  <line x1="55.5" y1="26.6" x2="58.15" y2="29.6" class="line" />
  <line x1="58.15" y1="29.6" x2="61.2" y2="11.0" class="line" />
  <line x1="61.2" y1="10.0" x2="80" y2="10.0" class="line" />
</svg><span class="dyna-tab30">(square root)</span></p>
<p class="dyna-p2"><span class=" dyna-tab42">(Q must be &ge; 0)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)SQRT(±Q)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">General Form</span><span class="right-align">31&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">
<svg class="svgplacement11" width="400" height="70" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="25.6" class="text">P</text>
  <text x="55" y="25.6" class="text">sin</text>
  <line x1="98" y1="20.4" x2="138" y2="20.4" class="math-bar" />
  <text x="70" y="12.8" class="text" transform="scale(1.25,2.6)">(</text>
  <text x="110" y="12.8" class="text" transform="scale(1.25,2.6)">)</text>
  <text x="99" y="16.6" class="text">2&#960;</text>
  <text x="126" y="16.6" class="text">Q</text>
  <text x="113" y="36.6" class="text">R</text>
  <text x="163" y="58.6" class="text">(&nbsp;2&#960;&nbsp;Q/R&nbsp;&nbsp;&lt; 68.7 billion)</text>
  <line x1="176" y1="40" x2="176" y2="65" class="math-bar" />
  <line x1="248" y1="40" x2="248" y2="65" class="math-bar" />
</svg></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)SIN((2PI)(±Q)/±R)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">General Form</span><span class="right-align">32&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">
<svg class="svgplacement11" width="400" height="70" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="35" y="25.6" class="text">P</text>
  <text x="55" y="25.6" class="text">cos</text>
  <line x1="98" y1="20.4" x2="138" y2="20.4" class="math-bar" />
  <text x="70" y="12.8" class="text" transform="scale(1.25,2.6)">(</text>
  <text x="110" y="12.8" class="text" transform="scale(1.25,2.6)">)</text>
  <text x="99" y="16.6" class="text">2&#960;</text>
  <text x="126" y="16.6" class="text">Q</text>
  <text x="113" y="36.6" class="text">R</text>
  <text x="163" y="58.6" class="text">(&nbsp;2&#960;&nbsp;Q/R&nbsp;&nbsp;&lt; 68.7 billion)</text>
  <line x1="176" y1="40" x2="176" y2="65" class="math-bar" />
  <line x1="248" y1="40" x2="248" y2="65" class="math-bar" />
</svg></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)COS((2PI)(±Q)/±R)</span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">General Form</span><span class="dyna-tab12">Random numbers uniformly distributed between</span><span class="right-align">33&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-tab22">
<svg class="svgplacement12" width="35" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="-0.5" y="22.7" class="text">-</text>
  <text x="17.5" y="14.6" class="text">P</text>
  <line x1="14" y1="18.4" x2="29" y2="18.4" class="math-bar" />
  <text x="17.5" y="37.6" class="text">2</text>
</svg></span>
<span class="dyna-tab5">and</span>
<svg class="svgplacement13" width="35" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
    .math-bar { stroke: #523a28; stroke-width: 1.35; }
  </style>
  <text x="-0.5" y="22.7" class="text">+</text>
  <text x="17.5" y="14.6" class="text">P</text>
  <line x1="14" y1="18.4" x2="29" y2="18.4" class="math-bar" />
  <text x="17.5" y="37.6" class="text">2</text>
</svg></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(P)NOISE</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">General Form</span><span class="dyna-tab12">P times random numbers normally distributed</span><span class="right-align">34&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<p class="dyna-p3"><span class="dyna-tab27">with mean ±Q and standard deviation R</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=(±P)NORMRN(±Q,R)</span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page60text = `<div class="dyna-topline">
<span class="left-align">57</span>
<span class="right-align">equation forms</span>
</div>
<div class="dyna-eqnline">
<span class="center-align"><span class="dyna-underline">Special Functions</span></span>
<span class="right-align"><span class="dyna-underline">Form Number</span></span>
</div>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">Third-order delay: V is the output rate of</span><span class="right-align">39R&nbsp;&nbsp;&nbsp;</span></p>
<p class="dyna-p3"><span class="dyna-tab27">third-order delay of length C, with input P.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=DELAY3(±P,C)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">V is a train of pulses of height P and</span><span class="right-align">41(A or R)</span></p>
<p class="dyna-p3"><span class="dyna-tab27">width DT. The first pulse appears at time Q,</span></p>
<p class="dyna-p3"><span class="dyna-tab27">and succeeding pulses, at intervals R.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=PULSE(±P,Q,R)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<svg class="svgplacement14" width="80" height="90" xmlns="http://www.w3.org/2000/svg">  
  <style> .text { font-family: monospace; fill: #523a28; font-size: 16px; } </style>
  <text x="3" y="44" class="text">V</text>
  <text x="18" y="44" class="text">=</text>
  <text x="30" y="17.5" class="text" transform="scale(1.25,3)">{</text>
</svg>
<span class="dyna-tab9pt5">initial value</span><span class="dyna-tab3">if TIME < Q</span><span class="right-align">45(A or R)</span></p>
<p class="dyna-p2"><span class="dyna-tab32">P</span><span class="dyna-tab15">if TIME &ge; Q</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=STEP(±P,Q)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
<svg class="svgplacement14" width="80" height="95" xmlns="http://www.w3.org/2000/svg">  
  <style> .text { font-family: monospace; fill: #523a28; font-size: 16px; } </style>
  <text x="3" y="61" class="text">V</text>
  <text x="18" y="61" class="text">=</text>
  <text x="30" y="16" class="text" transform="scale(1.25,5)">{</text>
</svg>
<span class="dyna-tab9pt5">initial value</span><span class="dyna-tab3">if TIME &le; Q</span><span class="right-align">47(A or R)</span></p>
<p class="dyna-p2"><span class="dyna-tab32">initial value +</span>
<svg class="svgplacement15" width="80" height="90" xmlns="http://www.w3.org/2000/svg">
  <style type="text/css">
      .text-monospace { fill: #523a28; font-family: monospace; }
      .text-summation { fill: #523a28; font-family: 'courier'; }
  </style>
  <text x="4.413" y="15.87" class="text-monospace" font-size="12px" style="stroke-width:1.0">TIME</text>
  <text x="10" y="42" class="text-summation" font-size="44.06px" transform="scale(0.8030,1.245)" style="stroke-width:1.088">Σ</text>
  <text x="2.813" y="65" class="text-monospace" font-size="12px" style="stroke-width:1.0">Q</text>
  <text x="14.55" y="65" class="text-monospace" font-size="12px" style="stroke-width:1.0">+</text>
  <text x="25.72" y="65" class="text-monospace" font-size="12px" style="stroke-width:0.9969">DT</text>
  <text x="40" y="40.4" class="text-monospace" font-size="12px" style="stroke-width:0.9969">P(DT)</text>
</svg>
<span class="dyna-tab2">if TIME > Q</span></span></p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=RAMP(±P,Q)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">V is set equal to P at sampling intervals Q</span><span class="right-align">43(A or R)</span></p>
<p class="dyna-p3"><span class="dyna-tab27">and is not changed in between.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=SAMPLE(±P,Q)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">
<svg class="svgplacement16" width="110" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="33" y="25.6" class="text">M</text>
  <text x="42" y="25.6" class="text">A</text>
  <text x="51" y="25.6" class="text">X</text>
  <text x="60" y="24.6" class="text">(</text>
  <text x="69" y="25.6" class="text">P</text>
  <text x="75" y="26.1" class="text">,</text>
  <text x="86" y="25.6" class="text">Q</text>
  <text x="95" y="24.6" class="text">)</text>
</svg>
</span><span class="right-align">56&nbsp&nbsp&nbsp;&nbsp</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=MAX(±P,±Q)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">
<svg class="svgplacement16" width="110" height="40" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font-family: monospace; fill: #523a28; font-size: 16px; }
  </style>
  <text x="3" y="25.6" class="text">V</text>
  <text x="18" y="25" class="text">=</text>
  <text x="33" y="25.6" class="text">M</text>
  <text x="42" y="25.6" class="text">I</text>
  <text x="51" y="25.6" class="text">N</text>
  <text x="60" y="24.6" class="text">(</text>
  <text x="69" y="25.6" class="text">P</text>
  <text x="75" y="26.1" class="text">,</text>
  <text x="86" y="25.6" class="text">Q</text>
  <text x="95" y="24.6" class="text">)</text>
</svg>
</span><span class="right-align">54&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=MIN(±P,±Q)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page61text = `<div class="dyna-topline">
  <span class="left-align">58</span>
  <span class="right-align">appendix B</span>
</div>
<div class="dyna-eqnline">
  <span class="center-align"><span class="dyna-underline">Special Functions</span></span>
  <span class="right-align"><span class="dyna-underline">Form Number</span></span>
</div>
<p class="dyna-p2">
  <span class="left-align"><span class="dyna-underline">General Form</span></span>
  <span class="dyna-tab12">
    <span class="dyna-flex-container">
      <svg class="svgplacement17" width="50" height="40" xmlns="http://www.w3.org/2000/svg">
        <style>
          .text { font-family: monospace; fill: #523a28; font-size: 16px; }
        </style>
        <text x="3" y="25.6" class="text">V</text>
        <text x="18" y="25.6" class="text">=</text>
        <text x="33" y="16.6" class="text">P</text>
        <text x="33" y="36.6" class="text">Q</text>
      </svg>
      <span class="svgtext17">
        <span class="right-align">if R &ge; S<br>if R < S</span>
      </span>
    </span>
  </span>
  <span class="right-align">51&nbsp;&nbsp;&nbsp;&nbsp;</span>
</p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=CLIP(±P,±Q,±R,±S)</span></span></p>
<p class="dyna-p2">
  <span class="left-align"><span class="dyna-underline">General Form</span></span>
  <span class="dyna-tab12">
    <span class="dyna-flex-container">
      <svg class="svgplacement17" width="50" height="40" xmlns="http://www.w3.org/2000/svg">
        <style>
          .text { font-family: monospace; fill: #523a28; font-size: 16px; }
        </style>
        <text x="3" y="25.6" class="text">V</text>
        <text x="18" y="25.6" class="text">=</text>
        <text x="33" y="16.6" class="text">P</text>
        <text x="33" y="36.6" class="text">Q</text>
      </svg>
      <span class="svgtext17">
        <span class="right-align">if R = S<br>if R &ne; S</span>
      </span>
    </span>
  </span>
  <span class="right-align">49&nbsp;&nbsp;&nbsp;&nbsp;</span>
</p>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=SWITCH(±P,±Q,R)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">V is function of P given by the table, NAME.</span><span class="right-align">59&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<p class="dyna-p3"><span class="dyna-tab29">N1 = first value of P</span></p>
<p class="dyna-p3"><span class="dyna-tab29">N2 = last value of P</span></p>
<p class="dyna-p3"><span class="dyna-tab29">N3 = interval between successive values of P</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=TABLE(NAME,P,±N1,±N2,N3)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">V is function of P given by the table, NAME. If</span><span class="right-align">58&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
<p class="dyna-p3"><span class="dyna-tab27">range of P exceeds N1 and N2, extreme value</span></p>
<p class="dyna-p3"><span class="dyna-tab27">of table is used.</span></p>
<p class="dyna-p3"><span class="dyna-tab29">N1 = first value of P</span></p>
<p class="dyna-p3"><span class="dyna-tab29">N2 = last value of P</span></p>
<p class="dyna-p3"><span class="dyna-tab29">N3 = interval between successive values of P</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=TABHL(NAME,P,±N1,±N2,N3)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<div class="dyna-caption"><span class="dyna-underline">Boxcars and Related Functions</span></div>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">V is a train of N boxcars shifted cyclically</span><span class="right-align">35B&nbsp;&nbsp;&nbsp;</span></p>
<p class="dyna-p3"><span class="dyna-tab27">at shifting intervals P.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=BOXCYC(N,P)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">V is a train of N boxcars shifted linearly</span><span class="right-align">37B&nbsp;&nbsp;&nbsp;</span></p>
<p class="dyna-p3"><span class="dyna-tab27">at shifting intervals P.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=BOXLIN(N,P)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span><span class="dyna-tab12">V is to be loaded initially with</span><span class="right-align">36N&nbsp;&nbsp;&nbsp;</span></p>
<p class="dyna-p3"><span class="dyna-tab27">the product of P and Q.</span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=BOXLOAD(±P,±Q)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page62text = `<div class="dyna-topline">
<span class="left-align">59</span>
<span class="right-align">equation forms</span>
</div>
<div class="dyna-eqnline">
<span class="center-align"><span class="dyna-underline">Boxcars and Related Functions</span></span>
<span class="right-align"><span class="dyna-underline">Form Number</span></span>
</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
  <span class="dyna-tab12">
    <span class="dyna-flex-container">
      <svg class="svgplacement18" width="130" height="70" xmlns="http://www.w3.org/2000/svg">
      <style type="text/css" id="style1">
      .text { font-family: monospace; fill: #523a28; font-size: 16px;}
      .text-subscript { fill: #523a28; font-family: monospace; stroke-width: 0.778214; font-size: 15px}
      .text-summation { fill: #523a28; font-family: 'courier'; stroke-width: 1.15831; font-size: 46.9px}
      </style>
      <text x="3" y="39" class="text">V</text>
      <text x="18" y="39" class="text">=</text>
      <text x="44" y="14" class="text">N</text>
      <text x="42" y="40" class="text-summation" transform="scale(0.80310642,1.245165)">Σ</text>
      <text x="32" y="63" class="text">i</text>
      <text x="43" y="63" class="text">=</text>
      <text x="53" y="63" class="text">1</text>
      <text x="63" y="38" class="text">P</text>
      <text x="74" y="41" class="text-subscript">i</text>
      </svg>
    </span>
  </span>
  <span class="right-align">53&nbsp;&nbsp;&nbsp;&nbsp;</span>
</p>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=SUM1(N,P)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
  <span class="dyna-tab12">
    <span class="dyna-flex-container">
      <svg class="svgplacement18" width="130" height="70" xmlns="http://www.w3.org/2000/svg">
      <style type="text/css" id="style1">
      .text { font-family: monospace; fill: #523a28; font-size: 16px;}
      .text-subscript { fill: #523a28; font-family: monospace; stroke-width: 0.778214; font-size: 15px}
      .text-summation { fill: #523a28; font-family: 'courier'; stroke-width: 1.15831; font-size: 46.9px}
      </style>
      <text x="3" y="39" class="text">V</text>
      <text x="18" y="39" class="text">=</text>
      <text x="44" y="14" class="text">N</text>
      <text x="42" y="40" class="text-summation" transform="scale(0.80310642,1.245165)">Σ</text>
      <text x="32" y="63" class="text">i</text>
      <text x="43" y="63" class="text">=</text>
      <text x="53" y="63" class="text">1</text>
      <text x="63" y="38" class="text">P</text>
      <text x="74" y="41" class="text-subscript">i</text>
      <text x="85" y="38" class="text">Q</text>
      <text x="96" y="41" class="text-subscript">i</text>
      </svg>
    </span>
  </span>
  <span class="right-align">55&nbsp;&nbsp;&nbsp;&nbsp;</span>
</p>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=SUM2(N,P,Q)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
<p class="dyna-p2"><span class="left-align"><span class="dyna-underline">General Form</span></span>
  <span class="dyna-tab12">
    <span class="dyna-flex-container">
      <svg class="svgplacement18" width="130" height="70" xmlns="http://www.w3.org/2000/svg">
      <style type="text/css" id="style1">
      .text { font-family: monospace; fill: #523a28; font-size: 16px;}
      .text-subscript { fill: #523a28; font-family: monospace; stroke-width: 0.778214; font-size: 15px}
      .text-summation { fill: #523a28; font-family: 'courier'; stroke-width: 1.15831; font-size: 46.9px}
      </style>
      <text x="3" y="39" class="text">V</text>
      <text x="18" y="39" class="text">=</text>
      <text x="44" y="14" class="text">N</text>
      <text x="42" y="40" class="text-summation" transform="scale(0.80310642,1.245165)">Σ</text>
      <text x="32" y="63" class="text">i</text>
      <text x="43" y="63" class="text">=</text>
      <text x="53" y="63" class="text">1</text>
      <text x="63" y="38" class="text">P</text>
      <text x="74" y="41" class="text-subscript">i</text>
      <text x="85" y="38" class="text">Q</text>
      <text x="96" y="41" class="text-subscript">i</text>
      <text x="107" y="38" class="text">R</text>
      <text x="118" y="41" class="text-subscript">i</text>
      </svg>
    </span>
  </span>
  <span class="right-align">57&nbsp;&nbsp;&nbsp;&nbsp;</span>
</p>
<p class="dyna-p3"><span class="left-align"><span class="dyna-underline">Exact Punching Format</span><span class="dyna-eqnfont dyna-tab3">V=SUM3(N,P,Q,R)</span></span></p>
<div class="dyna-blankline">&nbsp;</div>
`

const page63text = `<center class="dyna-hdr5">INDEX TO CHAPTER 2</center>
<p class="dyna-p2">
<span class="dyna-column"><span class="dyna-tab1">Action-time, variable, 41-42</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Level, definition of, 20</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Auxiliary, definition of, 20-21</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Logarithmic function, 34</span></span></p>
<div class="dyna-shortblank">&nbsp;</div>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Boxcar, 32-34</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Maximum function, 38</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">subscripts on, 23</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Minimum function, 38</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Boxcar Train, definition of, 21</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">initial value for, 27</span></span>
  <span class="dyna-column"><span class="dyna-tab1">NOISE card, 31-32</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">BOXLOAD function, 33-34</span></span>
  <span class="dyna-column"><span class="dyna-tab1">NOTE card, 31</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">&nbsp;</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Numerical values, 26</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Card, comments on, 26</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">constant, 26-27</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Order of cards, 32</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">continuation, 25-26</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">direction, 27-32</span></span>
  <span class="dyna-column"><span class="dyna-tab1">PLOT card, 30-31</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">equation, 20-27</span></span>
  <span class="dyna-column"><span class="dyna-tab3">in reruns, 32</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">identification, 27-28</span></span>
  <span class="dyna-column"><span class="dyna-tab1">PRINT card, 29-30</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">NOISE, 31-32</span></span>
  <span class="dyna-column"><span class="dyna-tab3">in reruns, 32</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">NOTE, 31</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Pulse function, 36-37</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">PLOT, 30-31</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">PRINT, 29-30</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Quantities, permissible defining, 23-24</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">RUN, 28</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Quantity name, 21</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">SPEC, 28-29</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Quantity type, 20-21</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Card punching, 25-26</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Cards, order of, 32</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Ramp function, 37</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Clip function, 38</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Random numbers, 35-36</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Comments on cards, 26</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Rate, definition of, 21</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Computer time required, 43</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Reruns, 32</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Constant, computed, definition of, 21</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Rule of the final space, 25</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">given, definition of, 21</span></span>
  <span class="dyna-column"><span class="dyna-tab1">RUN card, 28</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Constant card, 26-27</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Continuation card, 25-26</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Sample function, 37</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Cosine function, 35</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Scaling in printed results, 30</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">&nbsp;</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Sine function, 35</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Delay function, third-order, 36</span></span>
  <span class="dyna-column"><span class="dyna-tab1">SPEC card, 28-29</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Direction cards, 27-32</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Square-root function, 35</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3"><span class="dyna-underline">See also</span> the particular type card</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Step function, 37</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">DT, 24</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Subscripts, 23-24</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">choice of, 42-43</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Summing functions, 40-41</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">&nbsp;</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Supplementary, definition of, 21</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Equation card, 20-27</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Switch function, 38</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Equation forms, 21-23</span></span>
</p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Exponential function, 34</span></span>
  <span class="dyna-column"><span class="dyna-tab1">TABLE functions, 38-40</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">&nbsp;</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Tables, 26</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Final space, rule of the, 25</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Third-order delay function, 36</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">&nbsp;</span></span>
  <span class="dyna-column"><span class="dyna-tab1">TIME, 24</span></span>
</p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Identification card, 27-28</span></span>
  <span class="dyna-column"><span class="dyna-tab3">comparisons with, 41</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab1">Initial values, for auxiliary, 25</span></span>
  <span class="dyna-column"><span class="dyna-tab3">computer, required, 43</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">for boxcar train, 27, 33-34</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Type, quantity, 20-21</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">for level, 24</span></span>
  <span class="dyna-column"><span class="dyna-tab3">variable, 20</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">for rate, 25</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">for supplementary, 24</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Variable action time, 41-42</span></span></p>
<p class="dyna-p2">
  <span class="dyna-column"><span class="dyna-tab3">for third-order delay, 25, 36</span></span>
  <span class="dyna-column"><span class="dyna-tab1">Variable type, 20</span></span></p>
<center class="dyna-footer1">60</center>
<div class="dyna-blankline">&nbsp;</div>
`

const markdown = `
# Hello, Markdown!
This is a paragraph with **bold** text and *italic* text.
`
const modeltext = `
*      M478-248,DYN,TEST,1,1,0,0
RUN    2698JP
NOTE   MODEL OF RETAIL STORE
NOTE
1L     IAR.K=IAR.J+(DT)(SRR.JK-SSR.JK)                                 INVENTORY ACTUAL
1L     UOR.K=UOR.J+(DT)(RRR.JK-SSR.JK)                                 UNFILLED ORDERS
20A    NIR.K=IAR.K/DT                                                  NEGATIVE INVENTORY
20A    STR.K=UOR.K/DFR                                                 SHIPMENTS TRIED
54R    SSR.KL=MIN(STR.K,NIR.K)                                         SHIPMENTS SENT
40R    PSR.KL=RRR.JK+(1/DIR)(IDR.K-IAR.K)                              PURCHASE ORDERS SENT
12A    IDR.K=(AIR)(RSR.K)                                              INVENTORY DESIRED
3L     RSR.K=RSR.J+(DT)(1/DRR)(RRR                                     REQUISITIONS SMOOTHED
X1     .JK-RSR.J)
39R    SRR.KL=DELAY3(PSR.JK,DTR)                                       SHIPMENTS RECEIVED
NOTE
NOTE   INITIAL CONDITIONS
NOTE
12N    UOR=(DFR)(RRR)
6N     RSR=RRR
6N     IAR=IDR
NOTE
OTE   INPUT
NOTE
7R     RRR.KL=RRI+RCR.K                                                REQUISITIONS RECEIVED
45A    RCR.K=STEP(STH,5)                                               REQUISITION CHANGE
NOTE
NOTE   CONSTANTS
NOTE
C      AIR=8 WKS                                                       CONSTANT FOR INVENTORY
C      DFR=1 WK                                                        DELAY IN FILLING ORDERS
C      DIR=4 WKS                                                       DLY REFILLING INVENTORY
C      DRR=8 WKS                                                       REQUISITION SMTHNG T C
C      DTR=2 WKS                                                       DELAY IN TRANSIT
C      RRI=1000 ITEMS/WK                                               REQ. RECEIVED INITIALLY
C      STH=100 ITEMS/WK                                                STEP HEIGHT
NOTE
PRINT  1)IAR(0.1),IDR(0.1)/2)UOR(0.1)/3)RRR(0.1),SSR(0.1)/4)PSR(0.1),SRR(0.1)
PRINT  1)IAR,IDR/2)UOR/3)RRR,SSR/4)PSR,SRR
PLOT   IAR=I,UOR=U(0,12000)/RRR=R,SSR=S,PSR=P,SRR=Q(1000,1200)
PLOT   RRR=R,SSR=S,PSR=P,SRR=Q(1000,1200)
PLOT   IAR=I,UOR=U/RRR=R,SSR=S,PSR=P,SRR=Q
SPEC   DT=0.1/LENGTH=50/PRTPER=20/PLTPER=10
`
  /**
   * @function pagemap
   */
  function pagemap() {
    const pagecontents = {
      page4text: page4text, page5text: page5text,  page6text: page6text, page7text: page7text, page8text: page8text, page10text: page10text, page12text: page12text, page13text: page13text, page14text: page14text, page17text: page1text, page18text: page1text, page19text: page19text, page20text: page20text, page23text: page23text, page24text: page24text, page26text: page26text, page27text: page27text, page28text: page28text, page29text: page29text, page30text: page30text, page31text: page31text, page32text: page32text, page33text: page33text, page34text: page34text, page35text: page35text, page37text: page37text, page38text: page38text, page39text: page39text, page40text: page40text, page41text: page41text, page43text: page43text, page44text: page44text, page45text: page45text, page46text: page46text, page47text: page47text, page48text: page48text, page51text: page1text, page52text: page1text, page53text: page1text, page54text: page54text, page68text: page1text
    }
    return (pagecontents)
  }
  /**
  *  @function handleclick
  */
  function handleclick(event) {
    if (this.querySelector('.tblcon-page')) {
      let content
      const pagenumber = parseInt(this.querySelector('.tblcon-page').textContent) + 3
      const pageinfo = `page${pagenumber}text`
      const pagecontents = pagemap()
      try {
        content = eval(pageinfo)
      } catch (e) {
        if (typeof pagecontents[pageinfo] === 'string') {
          content = pagecontents[pageinfo]
        }
      }
      dynamotoolbarmodule.deletearrow()
      dynamotoolbarmodule.addpageupdown()
      displaypage = pagenumber
      writepage(content)
      document.querySelectorAll('.tblcon-line, .tblcon-line2').forEach(element => {svg
        element.addEventListener('click', handleclick)
      })
    }
  }
  /*
  * @function addevents
  */
  function addevents() {
    document.querySelectorAll('.tblcon-line, .tblcon-line2').forEach(element => {
        element.addEventListener('click', handleclick)
    })
  }
  /*
  * @function firstpage
  */
  function firstpage() {
    writepage(page2text)
    displaypage = 2
    dynamotoolbarmodule.deletearrow()
    dynamotoolbarmodule.addrightarrow()
    addevents()
  }
  /*
  * @function secondpage
  */
  function secondpage() {
    writepage(page3text)
    displaypage = 3
    dynamotoolbarmodule.deletearrow()
    dynamotoolbarmodule.addleftarrow()
    addevents()
  }
  /*
  * @function writepage
  */
  function writepage(html) {
    const outputdiv = document.getElementById('dynamodisplay')
    outputdiv.innerHTML = html
  }
  /**
   * @function pagedown
   */
  function pagedown() {
    displaypage = nextpagedown(displaypage)
    const pageinfo = `page${displaypage}text`
    content = eval(pageinfo)
    writepage(content)
  }
  /**
   * @function pageup
   */
  function pageup() {
    displaypage = nextpageup(displaypage)
    const pageinfo = `page${displaypage}text`
    content = eval(pageinfo)
    writepage(content)
  }
  /*
  * @function nextpagedown
  */
  function nextpagedown(n) {
    let result = (n - 2 + 63) % 63 + 1
    while (result === 2 || result === 3 || result === 64) {
      result = (result - 2 + 63) % 63 + 1
    }
    return result
  }
  /*
  * @function nextpageup
  */
  function nextpageup(n) {
    let result = (n % 63) + 1
    while (result === 2 || result === 3 || result === 64) {
      result = (result % 63) + 1
    }
    return result
  }
  var displaypage
  return {
    gettext: function() {
      return modeltext
    },
    getmarkdown: function() {
      return markdown
    },
    showTOCpage1: firstpage,
    showTOCpage2: secondpage,
    nextpage: pageup,
    previouspage: pagedown
  }
})()
  
  
