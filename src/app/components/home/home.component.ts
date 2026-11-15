import { Component ,  OnDestroy} from '@angular/core';
 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {
  seconds = 0;

  timerId: ReturnType<typeof setInterval> |null =null
 

  start(){
    if(this.timerId !== null){
      return;
    }
    this.timerId =  setInterval(() => {
      this.seconds++
    },1000)
  }
   stop(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

   reset(): void {
    this.stop();
    this.seconds = 0;
  }

  ngOnDestroy(): void {
    this.stop();
  }
 

}
