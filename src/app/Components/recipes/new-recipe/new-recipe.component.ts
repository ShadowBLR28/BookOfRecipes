import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewRecipeComponent implements OnInit {
  testForm: FormGroup;

  constructor(private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.testForm = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      prepareTime: this.fb.control('00:00', [Validators.required]),
      cookingTime: this.fb.control('00:30', [Validators.required]),
      portions: this.fb.control('1', [Validators.required]),
      cookingLevel: this.fb.control('', [Validators.required]),
      category: this.fb.control('', [Validators.required]),
      ingredients: this.fb.array([]),
      steps: this.fb.array([])
    })

  }

  ngOnInit(): void {
    this.addStep();
    this.addIngredient();
  }

  public get ingredients(): FormArray {
    return this.testForm.get('ingredients') as FormArray;
  }

  public get steps(): FormArray {
    return this.testForm.get('steps') as FormArray;
  }

  addIngredient(): void {
    let items = this.testForm.get("ingredients") as FormArray;
    items.push(this.generateIngredient());
  }

  generateIngredient(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', [Validators.required]),
      quantity: this.fb.control('', [Validators.required]),
      unitValue: this.fb.control('', [Validators.required])
    });
  }

  addStep(): void {
    let items = this.testForm.get("steps") as FormArray;
    items.push(this.generateStep())
    //items.controls = [...items.controls, this.generateStep()];
  }

  generateStep(): FormGroup {
    return this.fb.group({
      number: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      url: this.fb.control('', [Validators.required])
    });
  }

  imageChanged(index: number, url: string): void {
    let step = this.steps.at(index);
    step.patchValue({ url: url });
    console.log(`index:${index}`);
    console.log(`url:${url}`)
  }

  removeStep(index: number): void {
    let items = this.steps;
    items.removeAt(index);
  }

  removeIngredient(): void {
    let items = this.ingredients;
    items.removeAt(items.length - 1);
  }
}
