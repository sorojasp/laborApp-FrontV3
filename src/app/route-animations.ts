import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';

//fader
export class Animations {

  static fader (){
    const fader = trigger('routerAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)'
          }),
        ],{ optional: true }),
        query(':enter' ,[
          animate('600ms ease',
            style({ opacity: 1, transform: 'scale(1) translateY(0)' })
          )
        ],{ optional: true })
      ])
    ]);
    return fader;

  }

  static slideToLeft(){
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({
          left: '-100%'
        })
      ], {optional: true}),
      group([
        query(':leave', [
          animate('600ms ease', style({ left: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('600ms ease', style({ left: '0%' }))
        ], {optional: true})
      ])
    ]
  }
  static slideToRight(){
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({
          right: '-100%'
        })
      ], {optional: true}),
      group([
        query(':leave', [
          animate('600ms ease', style({ right: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('600ms ease', style({ right: '0%' }))
        ], {optional: true})
      ])
    ]
  }

  static slider(){

    trigger('routerAnimations', [
      transition('* => isLeft', this.slideToLeft()),
      transition('* => isRight', this.slideToRight()),
      transition('isRight => *', this.slideToLeft()),
      transition('isLeft => *', this.slideToRight())

    ])
  }

}

export const fader = trigger('routerAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      }),
    ],{ optional: true }),
    query(':enter' ,[
      animate('600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      )
    ],{ optional: true })
  ])
]);


export function slideToLeft() {
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({
        left: '-100%'
      })
    ], {optional: true}),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%' }))
      ], {optional: true}),
      query(':enter', [
        animate('600ms ease', style({ left: '0%' }))
      ], {optional: true})
    ])
  ]
}
export function slideToRight() {
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({
        right: '-100%'
      })
    ], {optional: true}),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%' }))
      ], {optional: true}),
      query(':enter', [
        animate('600ms ease', style({ right: '0%' }))
      ], {optional: true})
    ])
  ]
}


export const slider = trigger('routerAnimations', [
    transition('* => isLeft', slideToLeft()),
    transition('* => isRight', slideToRight()),
    transition('isRight => *', slideToLeft()),
    transition('isLeft => *', slideToRight())

  ])
