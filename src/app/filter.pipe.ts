import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(Arr: any[], term: any): any {

    let SkillExsist: boolean;
    let ArrJobs: any[] = [];

    if (term === undefined || term.length === 0) { return Arr; }
    // filter by Jobs/applicant skills
    else if (term instanceof Array) {
      Arr.filter(Job => {
        SkillExsist = true;
        let i;
        for (i = 0; i < term.length; i++) {
          if (!Job.Skills.includes(term[i])) {
            SkillExsist = false;
            break;
          }
        }
        if (SkillExsist) { ArrJobs.push(Job) }
      });

      return ArrJobs;
    }
    else if (typeof term === "string") {
      //filter by job name
      let ArrTypeApplicant: boolean = true;
      if (ArrTypeApplicant) {
        return Arr.filter(function (Input: any) { return Input.Name.toLowerCase().includes(term.toLowerCase()); })
      }
      else { //filter by applicant Postion
        return Arr.filter(function (Input: any) { return Input.Postion.toLowerCase().includes(term.toLowerCase()); })
      }


    }
  }

}
