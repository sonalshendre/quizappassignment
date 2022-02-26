import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'

const quizData=[
  {   
    id:"q1",
      tittle: "which of these RN component will be used to display 'wishtree' ?",
      option:[
       {
           id: "1a",
           name:"<Text> "
           
       },
       {
        id: "1b",
        name:" <View>"
        
    },
    {
      id: "1c",
      name:"<xyz> "
      
  },
  {
    id: "1d",
    name:" abc"
    
},
      
 ],
 correctAnswer: "1a"
  },
  
    {
      id:"q2",
        tittle: "which of the following component is the optimised way to show a long list of data?",
        option:[
         {
             id: "2a",
             name:"<View> "
             
         },
         {
          id: "2b",
          name:" <flatlist>"
          
      },
      {
        id: "2c",
        name:"<span> "
        
    },
    {
      id: "2d",
      name:" <p>"
      
  },
        
   ],
   correctAnswer: "2b"
    },
   
      {
        id:"q3",
          tittle: "how do we style the RN component?",
          option:[
           {
               id: "3a",
               name:"Stylesheet.create"
               
           },
           {
            id: "3b",
            name:" Stylesheet.css"
            
        },
        {
          id: "3c",
          name:"Stylesheet.CSS "
          
      },
      {
        id: "3d",
        name:" Stylesheet.Create"
        
    },
          
     ],
     correctAnswer: "3a"
      },
      
        {
          id:"q4",
            tittle: "which of the correct plug in to move one screen to anothere?",
            option:[
             {
                 id: "4a",
                 name:"React Hook "
                 
             },
             {
              id: "4b",
              name:"React navigation"
              
          },
          {
            id: "4c",
            name:"React stack "
            
        },
        {
          id: "4d",
          name:" React asyn"
          
      },
            
       ],
       correctAnswer: "4b"
        },
       
          {
            id:"q5",
              tittle: "which of the following is the correct methode(hook) to make an call on the next page?",
              option:[
               {
                   id: "5a",
                   name:"use state"
                   
               },
               {
                id: "5b",
                name:"useSelector"
                
            },
            {
              id: "5c",
              name:"usecallBack"
              
          },
          {
            id: "5d",
            name:" useEffect"
            
        },
              
         ],
         correctAnswer: "5d"
          },


]
export default function quizzcon() {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [hasSubmitted, setSubmit]= useState(false);


 const handleQuizzSelection = (sid,qid) =>
  {
    let newState={...quizAnswers};
    newState[qid] ={
      value: sid,
    }
    setQuizAnswers(newState);
  };

  const handleResult= () => {
    if(hasSubmitted){
      setSubmit(false);
      setQuizAnswers({});
    }
    else{
    var result=0;
   
     quizData.map((quiz)=> {
       if (quizAnswers[quiz?.id].value === quiz?.correctAnswer){
         result = result+1;
       }
     });
     setSubmit(true);
     alert('your score is: ' + result + " / " +quizData.length);
    }
   };

  
    
  return (
    <View style={{padding:20}}>
      <View style={{backgroundColor:'lightpink'}}>
      <Text style={{textAlign:'center',fontWeight:'bold',color:'black', fontSize:15}}> MCQ Quizz</Text>
      <Text style={{textAlign:'center', padding:10,fontWeight:'bold'}}>total no of questions: {quizData?.length}</Text>
      </View>
     <ScrollView style={{marginBottom:150}}>
       {
         quizData?.map((quiz,index)=>{
           return(
             <View>
            <Text style={{padding:10, marginBottom:10}}>{index + 1}.  {quiz?.tittle}</Text>
               <View style={{marginLeft:40, marginBottom:20}}>
              {
                quiz?.option.map((option, idx)=>{
                  return(
                    <TouchableOpacity onPress={()=> handleQuizzSelection( option?.id, quiz.id)}>
                      <Text style={[
                        {padding:5,width:200}, 

                        hasSubmitted ? 
                        quizAnswers[quiz.id]?.value === option.id?
                      
                        { backgroundColor:  
                          quizAnswers[quiz.id]?.value === quiz?.correctAnswer ?
                        'green'
                        : 'red',
                        }:null
                      :quizAnswers[quiz.id]?.value === option.id ? 
                      {backgroundColor:'#999'}
                      : null,
                      ]}>
                        {idx + 1}. {option?.name}
                     
                       </Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
            </View>
          
           )
         })}
         <Button title={ hasSubmitted? "reset" : 'submit'} onPress={ ()=> handleResult()} ></Button>
         </ScrollView>
       
    </View>
  )
}