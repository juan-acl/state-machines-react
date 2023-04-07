import { actions, assign, createMachine} from 'xstate';

const reset = assign({

passengers: (context, event) => context.passengers = [],
selectedCountry: (context, event) => context.selectedCountry = ''
})

const bookingMachine = createMachine({
  id: "Buy plane tickets",
  initial: "inicial",
  context: {
    passengers: [],
    selectedCountry: "",
  },
  states:{
    inicial: {
      on: {
        START: {
          target: 'search',
          actions: "imprimirInicio"
        }
      }
    },
    search: {
      entry: "imprimirEntrada",
      exit: "imrpimirSalida",
      on: {
        CONTINUE: {
          target: "passengers",
          actions: assign({
            selectedCountry: (context, event) => event.selectedCountry
          })
        },
        CANCEL: {
          target: "inicial",
          actions: reset
        }
      }
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: {
          target: "inicial",
          actions: reset
        },
        ADD: {
          target: "passengers",
          actions: assign((context, event) => context.passengers.push(event.newPassenger))
        }
      }
    },
    tickets: {
      on: {
        FINISH: {
          target: "inicial",
          actions: reset
        },
      },
    },
  },

},
  {
  actions: {
  imprimirInicio: () => console.log("imprimirInicio"),
  imprimirEntrada: () => console.log("imprimirEntrada a search"),
  imrpimirSalida: () => console.log("imrpimirSalida de search"),

    }
  }
);

export { bookingMachine };
