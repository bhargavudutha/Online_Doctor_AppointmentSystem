import { Doctor } from "./Doctor"
import { Patient } from "./Patient"

export class Appointment {
	id:number=0
	status:string=''
	date:string=''
	startTime:string=''
	endTime:string=''
	gender:string=''
	relation:string=''
	symptoms:string=''
	cancellationReason:string=''
	additionalInfo:string=''
	patient = new Patient()
	doctor= new Doctor()
	email:string=''
	
	}